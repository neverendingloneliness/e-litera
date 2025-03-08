import { Rating } from "@/interface/Rating";
import { apiSlice } from "../api/baseApi";

export const reviewApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllRating: builder.query({
            query: () => ({
                url:"/reviews",
                method:"GET"
            })
        }),
        getDetailReview: builder.query({
            query: (review) => ({
                url:`/reviews/${review}`,
                method:"GET"
            })
        }), 
        postRating: builder.mutation<Rating, Omit<Rating, "user_id">>({
            query: ({book_id, rating }) => ({
                url:'reviews',
                method:"POST",
                body: { book_id, rating }
            })
        })
 })
})

export const {
    useGetAllRatingQuery,
    useGetDetailReviewQuery,
    usePostRatingMutation
} = reviewApi