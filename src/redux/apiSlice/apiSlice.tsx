import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://my-json-server.typicode.com/dmitrijt9/book-api-mock' }),
    endpoints: () => ({}),
})
