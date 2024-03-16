import {
    MdAnalytics,
    MdAssignment,
    MdHome,
    MdPayments,
    MdPerson,
    MdSettings,
} from 'react-icons/md'

enum NavigationEnum {
    HOME = '/',
    /* expense domain */
    MY_EXPENSES = '/my-expenses',
    ADD_NEW_EXPENSE = '/my-expenses/new',
    VIEW_EXPENSE = '/my-expenses/:id',
    EDIT_EXPENSE = '/my-expenses/:id/edit',
    CLONE_EXPENSE = '/my-expenses/:id/clone',
    /* analysis domain */
    ANALYSIS = '/analysis',
    /* reports domain */
    REPORTS = '/reports',
    INSIGHTS = '/reports/insights',
    /* settings domain */
    SETTINGS = '/settings',
    PREFERENCES = '/settings/preferences',

    /* profile domain */
    PROFILE = '/profile',
}

export const NAVIGATION_LINKS = {
    core: [
        {
            label: 'Home',
            icon: MdHome,
            href: NavigationEnum.HOME,
        },
        {
            label: 'My Expenses',
            icon: MdPayments,
            href: NavigationEnum.MY_EXPENSES,
        },
        {
            label: 'Analysis',
            icon: MdAnalytics,
            href: NavigationEnum.ANALYSIS,
        },
        {
            label: 'Reports',
            icon: MdAssignment,
            href: NavigationEnum.REPORTS,
        },
    ],
    misc: [
        {
            label: 'Settings',
            icon: MdSettings,
            href: NavigationEnum.SETTINGS,
        },
        {
            label: 'Profile',
            icon: MdPerson,
            href: NavigationEnum.PROFILE,
        },
    ],
}
