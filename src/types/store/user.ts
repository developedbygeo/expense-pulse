export type User = {
    UserId: number
    Username: string
    Password: string
    FirstName: string
    LastName: string
    DateOfBirth: number // unix timestamp
    Allowance: number
    ProfileImage?: string
}
