import {
    MdAnalytics,
    MdAssignment,
    MdHome,
    MdPayments,
    MdPerson,
    MdSettings,
} from 'react-icons/md';

export enum NAVIGATION_LINKS {
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

export const SIDEBAR_NAVIGATION = {
    core: [
        {
            label: 'Home',
            icon: MdHome,
            href: NAVIGATION_LINKS.HOME,
        },
        {
            label: 'My Expenses',
            icon: MdPayments,
            href: NAVIGATION_LINKS.MY_EXPENSES,
        },
        {
            label: 'Analysis',
            icon: MdAnalytics,
            href: NAVIGATION_LINKS.ANALYSIS,
        },
        {
            label: 'Reports',
            icon: MdAssignment,
            href: NAVIGATION_LINKS.REPORTS,
        },
    ],
    misc: [
        {
            label: 'Settings',
            icon: MdSettings,
            href: NAVIGATION_LINKS.SETTINGS,
        },
        {
            label: 'Profile',
            icon: MdPerson,
            href: NAVIGATION_LINKS.PROFILE,
        },
    ],
};
