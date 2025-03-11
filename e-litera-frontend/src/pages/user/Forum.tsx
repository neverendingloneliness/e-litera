import NavUser from '@/components/layout/nav-user'
import { useGetAllForumQuery } from '@/store/slice/forum.service'
import React from 'react'
import ForumPost from './forum/ForumPost'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { ForumAll } from '@/interface/Forum'
import { LuCirclePlus } from 'react-icons/lu'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useUserQuery } from '@/store/slice/auth.service'
import { motion } from 'framer-motion'
import { fadeInAnimationVariant, fadeInReverseAnimationVariant, fadeInWidthBorrowBookAnimationReverseVariant } from '@/components/animation/variant'

const Forum = () => {

    const { data: forum, isLoading, isError } = useGetAllForumQuery({})
    const { data: currentUser, isLoading: isUserLoading } = useUserQuery()

    if (isLoading) return <p>Loading....</p>
    if (isError) return <p>Error!</p>
    return (
        <div>
            <NavUser />
            <div className='px-32 mt-5'>
                <Link to={'/forum/forum-post'} className=' '>
                    <Button>
                        Create Post
                        <LuCirclePlus />
                    </Button>
                </Link>
                <div className='grid grid-cols-5 mt-6'>
                    {forum.data?.map((item: ForumAll, index: number) => (
                        <motion.div variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"}  viewport={{ once: false, }} key={index} className='flex flex-col gap-4'>
                            <h1 className='text-3xl font-bold'>{item.title}</h1>
                            <p className='text-lg'> Post by : <span className='font-semibold'>{item.user_name}</span></p>
                            <p className='text-xs'>{item.content}</p>
                            <div className='flex gap-3'>
                                <Link to={`/forum-view/${item.id}`}>
                                    <Button className='bg-purple-600'>
                                        View Post
                                    </Button>
                                </Link>

                                {currentUser?.id  ===  item.user_id ? (
                                    <Button className=''>
                                        Delete Post
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