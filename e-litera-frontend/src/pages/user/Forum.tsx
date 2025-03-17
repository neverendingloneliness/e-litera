import NavUser from '@/components/layout/nav-user'
import { useDeleteForumMutation, useGetAllForumQuery } from '@/store/slice/forum.service'
import React from 'react'
import ForumPost from './forum-post/ForumPost'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { ForumAll } from '@/interface/Forum'
import { LuCirclePlus } from 'react-icons/lu'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useUserQuery } from '@/store/slice/auth.service'
import { motion } from 'framer-motion'
import { fadeInAnimationVariant, fadeInReverseAnimationVariant, fadeInWidthBorrowBookAnimationReverseVariant, fadeInWidthBorrowBookAnimationVariant } from '@/components/animation/variant'
import Loading from '@/components/loading/loading'
import { IoChatboxEllipsesOutline, IoChatboxEllipsesSharp } from 'react-icons/io5'
import { toast, Toaster } from 'sonner'

const Forum = () => {

    const { data: forum, isLoading, isError, refetch } = useGetAllForumQuery({})
    const { data: currentUser, isLoading: isUserLoading } = useUserQuery()
    const [deleteForum] = useDeleteForumMutation()

    if (isLoading) return < Loading />
    if (isError) return <p>Error!</p>

    async function handleDeleteForum(id: number) {
        try {
            await deleteForum(id).unwrap()
            toast.success(`Forum berhasil dihapus!`)
            refetch()
        } catch (error) {
            console.log("Error deleting " + error)
        }
    }

    return (
        <div>
            <NavUser />
            <div className='px-32 mt-5'>
                <div className='flex flex-col gap-5'>
                    <div className='text-4xl mt-5 gap-3 flex items-center'>
                        <motion.p variants={fadeInWidthBorrowBookAnimationReverseVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
                            <IoChatboxEllipsesOutline className='skew-x-12' />
                        </motion.p>
                        <motion.h1 className='font-semibold' variants={fadeInReverseAnimationVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
                            Forum Chat
                        </motion.h1>
                        <motion.p variants={fadeInWidthBorrowBookAnimationVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
                            <IoChatboxEllipsesSharp className='skew-x-12 rotate-180' />
                        </motion.p>
                    </div>
                    <motion.p variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
                        Lorem ipsum dolor sit amet consectetur
                    </motion.p>
                    <motion.div variants={fadeInWidthBorrowBookAnimationReverseVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
                        <Link to={'/forum/forum-post'} className=' '>
                            <Button>
                                Create Post
                                <LuCirclePlus />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <div className='grid grid-cols-5 mt-6 gap-10'>
                    {forum.data?.map((item: ForumAll, index: number) => (
                        <motion.div variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }} custom={index * 3} key={index} className='flex flex-col gap-4 bg-white shadow-lg p-5'>
                            <h1 className='text-xl font-bold'>#{item.id}</h1>
                            <h1 className='text-3xl font-bold'>{item.title}</h1>
                            <p className='text-lg'> Post by : <span className='font-semibold'>{item.user_name}</span></p>
                            <p className='text-xs'>{item.content}</p>
                            <div className='flex gap-3'>
                                <Link to={`/forum-view/${item.id}`}>
                                    <Button className='bg-purple-600'>
                                        View Post
                                    </Button>
                                </Link>

                                {currentUser?.id === item.user_id ? (
                                    <Button className='' onClick={() => handleDeleteForum(item.id)}>
                                        Delete Post
                                    <Toaster position="top-right" richColors />
                                    </Button>
                                    
                                ) : (
                                    <Button className='bg-white hover:bg-white text-black hover:text-black'>
                                        Report Post
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Forum