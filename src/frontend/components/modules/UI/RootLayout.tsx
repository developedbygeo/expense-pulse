import { Outlet } from 'react-router-dom';

import Header from '@/components/modules/UI/Header';
import Sidebar from '@/components/modules/UI/Sidebar';
import CurrentUserLogin from '@/components/modules/User/CurrentUserLogin';

const RootLayout = () => (
    <div className="relative bg-neutral-50 dark:bg-neutral-800 min-h-screen">
        <Header />
        <Sidebar className="fixed top-0 left-0 h-screen" />
        <CurrentUserLogin />
        <main className="ml-12 mt-6 transition-transform duration-500 ease-in-out">
            <Outlet />
        </main>
    </div>
);

export default RootLayout;
