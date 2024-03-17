import { getDatabase } from '@/db'
import { app, BrowserWindow, session } from 'electron'
import path from 'path'
import os from 'os'

import portfinder from 'portfinder'

import { startServer } from '@/api/databaseLayer'
import { CORE_API_ACTIONS } from '@/api/enums/coreApi'
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit()
}

const createWindow = async () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    const database = await getDatabase()

    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
    } else {
        mainWindow.loadFile(
            path.join(
                __dirname,
                `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`
            )
        )
    }

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    const freePort = await portfinder
        .getPortPromise({
            port: 3000,
            stopPort: 8000,
        })
        .then((port) => port)

    await startServer(freePort)

    mainWindow?.webContents.send(CORE_API_ACTIONS.SERVER_PORT, freePort)
    console.log('SENT EVENT')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// TODO REMOVE BEFORE PACKAGING.
const reduxDevTools = path.join(
    os.homedir(),
    '/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/3.1.6_9'
)
const reactDevTools = path.join(
    os.homedir(),
    '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/5.0.2_2'
)

app.whenReady().then(async () => {
    await session.defaultSession.loadExtension(reduxDevTools)
    await session.defaultSession.loadExtension(reactDevTools)
})
