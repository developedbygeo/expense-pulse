import { createApi } from '@reduxjs/toolkit/query/react'
import { ROOT_ENDPOINTS, USER_ENDPOINTS } from 'api/enums/endpoints'

import dynamicBaseQuery from '@/store/api/lib/dynamicBaseQuery'
import { LoginUser, RegisterUser } from '@/types/forms/userAuthSchema'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: dynamicBaseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        registerUser: builder.mutation<any, RegisterUser>({
            query: (user) => ({
                url: `${ROOT_ENDPOINTS.USERS}/${USER_ENDPOINTS.REGISTER}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            }),
        }),
        loginUser: builder.mutation<any, LoginUser>({
            query: (user) => ({
                url: `${ROOT_ENDPOINTS.USERS}/${USER_ENDPOINTS.LOGIN}`,
                method: 'POST',
                body: user,
            }),
        }),
        getUsers: builder.query({
            query: () => 'users',
            providesTags: ['User'],
        }),
    }),
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetUsersQuery,
} = userApi
