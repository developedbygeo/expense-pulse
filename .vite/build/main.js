"use strict";
const path = require("path");
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const electron = require("electron");
const portfinder = require("portfinder");
const cors = require("cors");
const express = require("express");
const zod = require("zod");
let db;
const dbPath = process.env.NODE_ENV === "development" ? "../core.db" : path.join(__dirname, "./resources/core.db");
const openDatabaseConnection = async () => {
  const db2 = await sqlite.open({
    filename: dbPath,
    driver: sqlite3.Database
  });
  await db2.exec("PRAGMA journal_mode = WAL");
  console.log("CONNECTED TO DB");
  return db2;
};
const getDatabase = async () => {
  if (!db) {
    db = await openDatabaseConnection();
  }
  return db;
};
var USER_ENDPOINTS = /* @__PURE__ */ ((USER_ENDPOINTS2) => {
  USER_ENDPOINTS2["REGISTER"] = "register";
  USER_ENDPOINTS2["LOGIN"] = "login";
  return USER_ENDPOINTS2;
})(USER_ENDPOINTS || {});
var ROOT_ENDPOINTS = /* @__PURE__ */ ((ROOT_ENDPOINTS2) => {
  ROOT_ENDPOINTS2["USERS"] = "users";
  ROOT_ENDPOINTS2["STATUS_CHECK"] = "status-check";
  return ROOT_ENDPOINTS2;
})(ROOT_ENDPOINTS || {});
var STATUS = /* @__PURE__ */ ((STATUS2) => {
  STATUS2[STATUS2["OK"] = 1] = "OK";
  STATUS2[STATUS2["ERROR"] = 0] = "ERROR";
  return STATUS2;
})(STATUS || {});
var REGISTER_FIELD_NAMES = /* @__PURE__ */ ((REGISTER_FIELD_NAMES2) => {
  REGISTER_FIELD_NAMES2["USERNAME"] = "Username";
  REGISTER_FIELD_NAMES2["PASSWORD"] = "Password";
  REGISTER_FIELD_NAMES2["CONFIRM_PASSWORD"] = "ConfirmPassword";
  REGISTER_FIELD_NAMES2["FIRST_NAME"] = "FirstName";
  REGISTER_FIELD_NAMES2["LAST_NAME"] = "LastName";
  REGISTER_FIELD_NAMES2["ANNUAL_INCOME"] = "AnnualIncome";
  REGISTER_FIELD_NAMES2["ALLOWANCE"] = "Allowance";
  REGISTER_FIELD_NAMES2["PROFILE_IMAGE"] = "ProfileImage";
  return REGISTER_FIELD_NAMES2;
})(REGISTER_FIELD_NAMES || {});
var LOGIN_FIELD_NAMES = /* @__PURE__ */ ((LOGIN_FIELD_NAMES2) => {
  LOGIN_FIELD_NAMES2["USERNAME"] = "Username";
  LOGIN_FIELD_NAMES2["PASSWORD"] = "Password";
  return LOGIN_FIELD_NAMES2;
})(LOGIN_FIELD_NAMES || {});
zod.z.object({
  [LOGIN_FIELD_NAMES.USERNAME]: zod.z.string().min(5, {
    message: "Username must be at least 5 characters long."
  }),
  [LOGIN_FIELD_NAMES.PASSWORD]: zod.z.string().min(8, { message: "Password must be at least 8 characters long." }).regex(/[0-9]/, {
    message: "Password must contain at least one number."
  })
});
const RegisterUserSchema = zod.z.object({
  [REGISTER_FIELD_NAMES.USERNAME]: zod.z.string().min(5, {
    message: "Username must be at least 5 characters long."
  }),
  [REGISTER_FIELD_NAMES.PASSWORD]: zod.z.string().min(8, { message: "Password must be at least 8 characters long." }).regex(/[0-9]/, {
    message: "Password must contain at least one number."
  }).regex(/[\W_]/, {
    message: "Password must contain at least one special character."
  }),
  [REGISTER_FIELD_NAMES.CONFIRM_PASSWORD]: zod.z.string(),
  [REGISTER_FIELD_NAMES.FIRST_NAME]: zod.z.string(),
  [REGISTER_FIELD_NAMES.LAST_NAME]: zod.z.string(),
  [REGISTER_FIELD_NAMES.ANNUAL_INCOME]: zod.z.number().optional(),
  [REGISTER_FIELD_NAMES.ALLOWANCE]: zod.z.number().min(100, { message: "Allowance must be at least 100." }),
  [REGISTER_FIELD_NAMES.PROFILE_IMAGE]: zod.z.string().optional()
}).refine((values) => values.Password === values.ConfirmPassword, {
  message: "The password must match!",
  path: ["ConfirmPassword"]
});
const validateUserRegistration = (req, res, next) => {
  console.log(req.body);
  try {
    RegisterUserSchema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof zod.z.ZodError) {
      res.status(400).json({
        message: "Invalid data",
        status: STATUS.ERROR,
        errors: err.errors
      });
    }
  }
};
const insertUser = async (user) => {
  const databaseManager = await getDatabase();
  const {
    Username,
    Password,
    FirstName,
    LastName,
    Allowance,
    AnnualIncome = null,
    ProfileImage = null
  } = user;
  try {
    const insertQuery = `INSERT INTO Users (Username, Password, FirstName, LastName, Allowance, AnnualIncome, ProfileImage) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const formattedAllowance = parseFloat(Allowance.toFixed(2));
    const formattedAnnualIncome = AnnualIncome ? parseFloat(AnnualIncome.toFixed(2)) : null;
    const result = await databaseManager.run(insertQuery, {
      Username,
      Password,
      FirstName,
      LastName,
      formattedAllowance,
      formattedAnnualIncome,
      ProfileImage
    });
    console.log(
      `Inserted: ${result.changes} rows into Users table with the last ID ${result.lastID} into user`
    );
  } catch (err) {
    console.error("Error inserting user into database:", err);
  }
};
const router$1 = express.Router();
router$1.post(`/${USER_ENDPOINTS.REGISTER}`, validateUserRegistration, async (req, res) => {
  const userData = req.body;
  try {
    await insertUser(userData);
    res.json({
      message: "User registered successfully",
      status: STATUS.OK
    });
  } catch (err) {
    res.status(500).json({
      message: "Error registering user",
      status: STATUS.ERROR
    });
  }
});
router$1.post(`/${USER_ENDPOINTS.LOGIN}`, (req, res) => {
  res.json({ message: "Hello from LOGIN_USER", status: 200 });
});
const router = express.Router();
router.get(`/`, async (req, res) => {
  res.json({ message: "Server is running", status: STATUS.OK });
});
const corsOptions = {
  origin: function(origin, callback) {
    if (!origin || origin.startsWith("http://localhost") || origin.startsWith("https://localhost")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ["GET", "POST"]
};
const app = express();
app.use(express.json());
const startServer = async (port) => {
  app.use(cors(corsOptions));
  app.use(`/api/${ROOT_ENDPOINTS.STATUS_CHECK}`, router);
  app.use(`/api/${ROOT_ENDPOINTS.USERS}`, router$1);
  app.listen(port);
  console.log(`Server started on port ${port}`);
};
if (require("electron-squirrel-startup")) {
  electron.app.quit();
}
const createWindow = async () => {
  const mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  await getDatabase();
  {
    mainWindow.loadURL("http://localhost:5173");
  }
  mainWindow.webContents.openDevTools();
  const freePort = await portfinder.getPortPromise({
    port: 3e3,
    stopPort: 8e3
  }).then((port) => port);
  await startServer(freePort);
};
electron.app.on("ready", createWindow);
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
