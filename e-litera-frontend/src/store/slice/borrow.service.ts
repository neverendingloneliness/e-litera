import { Rating } from "@/interface/Rating";
import { apiSlice } from "../api/baseApi";
import { BorrowedBook } from "@/interface/BorrowedBook";

export const borrowApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBorrowedBooks: builder.query({
            query: () => ({
                url:"/borrowed-records",
                method:"GET"
            })
        }),
        getDetailBorrowedBook: builder.query({
            query: (borrowedRecords) => ({
                url:`/borrowed-records/${borrowedRecords}`,
                method:"GET"
            })
        }), 
        postBorrowedBooks: builder.mutation<BorrowedBook, Omit<BorrowedBook, "user_id">>({
            query: ({book_id, borrow_date }) => ({
                url:'borrow-records',
                method:"POST",
                body: { book_id, borrow_date }
            })
        })
 })
})

export const {
    useGetAllBorrowedBooksQuery,
    useGetDetailBorrowedBookQuery,
    usePostBorrowedBooksMutation
} = borrowApi