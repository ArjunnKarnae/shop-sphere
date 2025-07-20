import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Order } from "../types/Order";


export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({
       baseUrl: "/src/data/"
    }),
    endpoints: (builder) => ({
        getAllOrders: builder.query<Order[], void>({
            query: () => "orders.json"
        }),
        getOrdersByUserId: builder.query<Order, number>({
            query: (userId) => `orders/${userId}`
        })
    })
});

export const {useGetAllOrdersQuery, useGetOrdersByUserIdQuery } = ordersApi;