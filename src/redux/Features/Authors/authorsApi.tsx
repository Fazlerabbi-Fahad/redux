import { booksApi } from "../../apiSlice/apiSlice";


const authorsApi = booksApi.injectEndpoints({
    endpoints: (builder) => ({
        getAuthors: builder.query({
            query: () => '/authors'
        })
    })
})


export const { useGetAuthorsQuery } = booksApi;