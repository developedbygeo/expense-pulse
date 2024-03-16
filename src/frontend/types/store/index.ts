import { AppSettings } from '@/types/store/app'
import { User } from '@/types/store/user'

export type InitialUserSliceState = {
    currentUser: User | null
    availableUsers: User[]
}

export type InitialAppSettingsSliceState = AppSettings
