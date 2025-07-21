import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../types/User";


export const usersApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "/src/data/"
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query<User[], void>({
            query: () => "users.json"
        }),
        getUserById: builder.query<User | undefined, string>({
            query: () => "users.json", 
            transformResponse: (users: User[], _meta, userId: string): User | undefined => {
                return users.find(user => user.userId === userId);
            }
        })
    })
});

export const {useGetAllUsersQuery, useGetUserByIdQuery} = usersApi;
