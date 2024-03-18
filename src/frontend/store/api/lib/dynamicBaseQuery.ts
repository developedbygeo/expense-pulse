import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

import { RootState } from '@/store/index'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const generateBaseQuery = (port: number) =>
    fetchBaseQuery({ baseUrl: `http://localhost:${port}/api` })

const dynamicBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const getPort = (): number | undefined => {
        const state = api.getState() as RootState
        return state.appSettings.api.port
    }

    const attemptFetchWithRetry = async (
        retryCount: number = 0
    ): Promise<any> => {
        const port = getPort()
        // If the port exists, proceed with the fetch operation
        if (port) {
            const updatedFetchQuery = generateBaseQuery(port)
            return updatedFetchQuery(args, api, extraOptions)
        } else if (retryCount < 3) {
            // Retry up to 3 times
            await delay(1000) // Wait for 1 second before retrying
            return attemptFetchWithRetry(retryCount + 1)
        } else {
            // After retrying, if the port is still not available, return an error
            return {
                error: {
                    status: 'FETCH_ERROR',
                    error: 'Port not available after retries',
                },
            }
        }
    }

    return attemptFetchWithRetry()
}

export default dynamicBaseQuery
