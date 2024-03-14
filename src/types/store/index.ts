import { User } from '@/types/store/user'

export type InitialUserSliceState = {
    currentUser: User | null
    availableUsers: User[]
}
