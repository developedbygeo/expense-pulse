import { GenericApiResponse } from '@/frontend/types/apiResponses'
import { User } from '@/frontend/types/store/user'

export type GetAllUsersData = GenericApiResponse & {
    data: User[]
}
