import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/components/modules/UI/RootLayout'
import Home from '@/routes/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [{ path: '/', element: <Home /> }],
    },
])

export default router
