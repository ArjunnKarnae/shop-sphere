
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types/Product";

 export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], void>({
            query: () => 'products'
        }),
        getProductById: builder.query<Product, number>({
            query: (id:number) => `products/${id}`
        })    
    })
});

export const {useGetAllProductsQuery, useGetProductByIdQuery} = productsApi;