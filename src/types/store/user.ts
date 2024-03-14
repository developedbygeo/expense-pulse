export type User = {
    UserId: number
    Username: string
    Password: string
    FirstName: string
    LastName: string
    Allowance: number
    AnnualIncome?: number | null
    ProfileImage?: string | null
}
