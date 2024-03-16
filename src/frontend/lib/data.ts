import { compareAsc, parseISO } from 'date-fns'

import { Expense } from '@/types/data/expenses'

export const extractNameInitials = (firstName?: string, lastName?: string) => {
    if (!firstName || !lastName) return

    return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export const calculateRatio = (numerator: number, denominator: number) => {
    return Math.round((numerator / denominator) * 100)
}

export const getTopExpenses = (expenses: Expense[], topN: number) => {
    const sortedExpenses = [...expenses].sort((a, b) => b.Amount - a.Amount)
    return sortedExpenses.slice(0, topN)
}

export const getLatestExpenses = (expenses: Expense[], topN: number) => {
    const sortedExpenses = [...expenses].sort((a, b) =>
        compareAsc(parseISO(b.CreatedAt), parseISO(a.CreatedAt))
    )
    // reverse to return latest first.
    return sortedExpenses.slice(0, topN).reverse()
}
