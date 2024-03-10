import './globals.css'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import router from '@/routes'
import store from '@/store'

const App = () => (
    <>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </>
)

export default App
