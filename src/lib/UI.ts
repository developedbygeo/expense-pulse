export const handleLayoutWithSidebar = (isOpen: boolean) => {
    isOpen
        ? document.body.classList.add('sidebar-open')
        : document.body.classList.remove('sidebar-open')
}
