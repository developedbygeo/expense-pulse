import { calculateRatio } from '@/lib/data'

export const handleLayoutWithSidebar = (isOpen: boolean) => {
    isOpen
        ? document.body.classList.add('sidebar-open')
        : document.body.classList.remove('sidebar-open')
}

export const colorCodeRatio = (value: number, threshold: number) => {
    const percentage = calculateRatio(value, threshold)

    if (percentage < 70) return 'text-green-700'
    if (percentage < 75) return 'text-amber-600'
    return 'text-red-700'
}