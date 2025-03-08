import { apiSlice } from "../api/baseApi";

export const booksApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => ({
                url:"/books",
                method:"GET"
            })
        }),
        getDetailBook: builder.query({
            query: (book) => ({
                url:`/books/${book}`,
                method:"GET"
            })
        }),
 })
})

export const {
    useGetAllBooksQuery,
    useGetDetailBookQuery
} = booksApi