import NavUser from '@/components/layout/nav-user'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useGetDetailForumQuery } from '@/store/slice/forum.service'
import React from 'react'
import { useParams } from 'react-router'
import ForumReply from './forum-post/ForumReply'
import Loading from '@/components/loading/loading'
import ReplyDisplay from './reply-display/ReplyDisplay'

const ForumDetail = () => {

  const { id } = useParams()
  const { data : forum, isLoading , isError} = useGetDetailForumQuery(id)

  if (isLoading) return < Loading />
  if ( isError ) return  <p>Error</p>

  const item = forum.data

  return (
    <div>
      <NavUser />
      <div className='px-32 min-h-screen'>
          <div className='flex flex-col gap-6'>
              <h1 className='text-3xl font-bold'>
                  {item.title}
              </h1>
              <p>
                  {item.content}
              </p>
              <ForumReply post_id={id ? parseInt(id, 10) : 0} />
              <ReplyDisplay post_id={id ? parseInt(id, 10) : 0} />
          </div>
      </div>
    </div>
  )
}

export default ForumDetail