import Sidebar from '@/components/modules/UI/Sidebar'
import { WithChildren } from '@/types/UI'

const Layout = ({ children }: WithChildren) => (
    <div className="relative min-h-screen">
        <Sidebar className="fixed top-0 left-0 h-screen" />
        <main>{children}</main>
    </div>
)

export default Layout
