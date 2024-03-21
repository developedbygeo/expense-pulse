import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/components/modules/UI/RootLayout';
import Home from '@/routes/Home';
import MyExpenses from '@/frontend/routes/MyExpenses';
import { NAVIGATION_LINKS } from '@/frontend/data/links';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: NAVIGATION_LINKS.HOME, element: <Home /> },
            { path: NAVIGATION_LINKS.MY_EXPENSES, element: <MyExpenses /> },
        ],
    },
]);

export default router;
