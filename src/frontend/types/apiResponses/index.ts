import { STATUS } from '@/api/enums/status'

export type GenericApiResponse = {
    message: string
    status: STATUS.OK | STATUS.ERROR
}
