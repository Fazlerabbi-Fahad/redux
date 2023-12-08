import { booksApi } from "../../apiSlice/apiSlice";


const bookApi = booksApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books'
        }),
        getBook: builder.query({
            query: (id) => `/books/${id}`
        }),
        postBook: builder.mutation({
            query: ({ id, data }) => ({
                url: '/books',
                method: 'POST',
                body: data
            })
        })
    }),
})


export const { useGetBooksQuery, useGetBookQuery, usePostBookMutation } = booksApi;