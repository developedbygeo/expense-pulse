export type Expense = {
    ExpenseId: number
    UserId: number
    Type: string
    Vendor: string
    Amount: number
    PaymentDate: string // TIMESTAMP
    Frequency: string
    NextBillingDate: string // TIMESTAMP
    CreatedAt: string // TIMESTAMP
    UpdatedAt: string // TIMESTAMP
    Category: string
    Description: string
    PaymentMethod: string
    Currency: string
    IsActive: 1 | 0 // 1 = true, 0 = false
}
