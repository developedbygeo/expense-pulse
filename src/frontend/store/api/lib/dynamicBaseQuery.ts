import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

import { RootState } from '@/store/index'

const generateBaseQuery = (port: number) =>
    fetchBaseQuery({ baseUrl: `http://localhost:${port}/api` })

const dynamicBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const state = api.getState() as RootState
    const port = state.appSettings.api.port
    // gracefully handle scenarios where data to generate the PORT is missing
    if (!port) {
        return {
            error: {
                status: 400,
                statusText: 'Port does not exist',
                data: 'No port has been received from main process.',
            },
        }
    }

    // provide the amended url and other params to the raw base query

    const updatedFetchQuery = generateBaseQuery(port)
    return updatedFetchQuery(args, api, extraOptions)
}

export default dynamicBaseQuery
