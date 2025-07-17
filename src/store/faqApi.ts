import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FAQ } from "../types/FAQ";


export const faqApi = createApi({
    reducerPath: "faqs",
    baseQuery: fetchBaseQuery({
       baseUrl: "/src/data/"
    }),
    endpoints: (builder) => ({
        getAllFaqs: builder.query<FAQ[], void>({
            query: () => 'faqs.json'
        })
    })
});

export const {useGetAllFaqsQuery} = faqApi;