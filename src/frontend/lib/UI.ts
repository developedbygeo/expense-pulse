import { SelectItemType } from '@/frontend/types/UI';
import { calculateRatio } from '@/lib/data';

export const handleLayoutWithSidebar = (isOpen: boolean) => {
    isOpen
        ? document.body.classList.add('sidebar-open')
        : document.body.classList.remove('sidebar-open');
};

export const colorCodeRatio = (value: number, threshold: number) => {
    const percentage = calculateRatio(value, threshold);

    if (percentage < 70) return 'text-green-700';
    if (percentage < 75) return 'text-amber-600';
    return 'text-red-700';
};

export const generateCtaAsyncText = (text: string, isLoading: boolean) =>
    isLoading ? 'Loading...' : text;

export const generateArrayFromEnum = <T>(enumObject: T): SelectItemType[] => {
    return Object.entries(enumObject)
        .filter(([key]) => isNaN(Number(key))) // Filter out the numeric keys
        .map(([key, value]) => ({
            value: value.toString(),
            label: key,
        }));
};
