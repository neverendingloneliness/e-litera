import Loading from '@/components/loading/loading'
import ReplyLoading from '@/components/loading/reply-loading'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ForumReply, ForumReplyAll } from '@/interface/Forum'
import { useUserQuery } from '@/store/slice/auth.service'
import { useDeleteForumRepliesMutation, useGetAllForumRepliesQuery } from '@/store/slice/reply.service'
import { error } from 'console'
import React, { useEffect } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { toast, Toaster } from 'sonner'

const ReplyDisplay = ({ post_id }: { post_id: number }) => {

    const { data: reply, isLoading, refetch } = useGetAllForumRepliesQuery({})
    const [deleteReply] = useDeleteForumRepliesMutation()
    const { data: currentUser, isLoading: isUserLoading } = useUserQuery()
    
    const handleDelete = async (id: number) => {
        try {
            await deleteReply(id).unwrap()
            toast.success(`Komentar dihapus!`)
            refetch()
        } catch (error) {
            console.error("Failed to delete reply:", error)
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch()
        }, 100)

        return () => clearInterval(intervalId)
    }, [refetch])

    if (isLoading) return <ReplyLoading />

    return (
        <div>
            {reply?.data
                ?.filter((item: ForumReplyAll) => item.post_id === post_id)
                .map((item: ForumReplyAll, index: number) => (
                    <div key={index} className="mt-10 ">
                        <h1 className='font-bold'>
                            {item.user_name}
                        </h1>
                        <div className='flex-col flex gap-5 items-end'>
                            <Textarea readOnly className="w-full">
                                {item.content}
                            </Textarea>
                            {currentUser?.id  ===  item.user_id ? (
                            <Button
                                onClick={() => handleDelete(item.id)}>
                                <FaRegTrashAlt />
                                Delete
                            <Toaster position="top-right" richColors />
                                
                            </Button>
                            ) : (
                                <Button>
                                    Report
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ReplyDisplay