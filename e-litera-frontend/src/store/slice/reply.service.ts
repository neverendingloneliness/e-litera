import { Rating } from "@/interface/Rating";
import { apiSlice } from "../api/baseApi";
import { BorrowedBook } from "@/interface/BorrowedBook";
import { DeleteReply, ForumPost, ForumReply } from "@/interface/Forum";

export const replyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllForumReplies: builder.query({
            query: () => ({
                url: "/forum-replies",
                method: "GET"
            })
        }),
        getDetailForumReplies: builder.query({
            query: (id) => ({
                    url: `/forum-replies/${id}`,
                method: "GET"
            })
        }),
        postForumReplies: builder.mutation<ForumReply, Omit<ForumReply, "user_id">>({
            query: ({ post_id, content }) => ({
                url: 'forum-replies',
                method: "POST",
                body: {  post_id, content }
            })
        }),
        deleteForumReplies : builder.mutation({
            query: (id) => ({
                url: `/forum-replies/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const {
    useGetAllForumRepliesQuery,
    useGetDetailForumRepliesQuery,
    usePostForumRepliesMutation,
    useDeleteForumRepliesMutation
} = replyApi