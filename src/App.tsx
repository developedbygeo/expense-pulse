import './globals.css'

import { Refine } from '@refinedev/core'
import routerProvider from '@refinedev/react-router-v6'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '@/components/modules/UI/Layout'

const App = () => (
    <>
        <BrowserRouter>
            <Refine
                resources={[
                    {
                        name: 'expenses',
                        list: '/my-expenses',
                        create: '/my-expenses/new',
                        show: '/my-expenses/:id',
                        edit: '/my-expenses/:id/edit',
                        clone: '/my-expenses/:id/clone',
                    },
                ]}
                routerProvider={routerProvider}
            >
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<div>Home</div>} />
                        <Route
                            path="/my-expenses"
                            element={<div>My Expenses</div>}
                        />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    </>
)

export default App
