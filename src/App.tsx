import './globals.css'

import { RouterProvider } from 'react-router-dom'

import router from '@/routes'

const App = () => (
    <>
        {/* <Layout> */}
        <RouterProvider router={router} />
        {/* </Layout> */}
    </>
)

export default App
