import { apiSlice } from "../api/baseApi";

export const booksApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => ({
                url:"/books",
                method:"GET"
            })
        }),
 })
})

export const {
    useGetAllBooksQuery
} = booksApi