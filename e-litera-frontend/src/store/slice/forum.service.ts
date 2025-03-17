import { Rating } from "@/interface/Rating";
import { apiSlice } from "../api/baseApi";
import { BorrowedBook } from "@/interface/BorrowedBook";
import { ForumPost } from "@/interface/Forum";

export const forumApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllForum: builder.query({
            query: () => ({
                url: "/forum-posts",
                method: "GET"
            })
        }),
        getDetailForum: builder.query({
            query: (id) => ({
                url: `/forum-posts/${id}`,
                method: "GET"
            })
        }),
        postForum: builder.mutation<ForumPost, Omit<ForumPost, "user_id">>({
            query: ({ title, content }) => ({
                url: 'forum-posts',
                method: "POST",
                body: { title, content }
            })
        }),
        deleteForum : builder.mutation({
            query: (id) => ({
                url: `/forum-posts/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const {
    useGetAllForumQuery,
    useGetDetailForumQuery,
    usePostForumMutation,
    useDeleteForumMutation
} = forumApi