import NavUser from '@/components/layout/nav-user'
import { useGetDetailForumQuery } from '@/store/slice/forum.service'
import React from 'react'
import { useParams } from 'react-router'

const ForumDetail = () => {

  const { id } = useParams()
  const { data : forum, isLoading , isError} = useGetDetailForumQuery(id)

  if (isLoading) return <p>Loading book details...</p>;
  if ( isError ) return  <p>Error</p>

  const item = forum.data

  return (
    <div>
      <NavUser />
      <div className='px-32 min-h-screen'>
          <div>
              <h1>
                  {item.title}
              </h1>
              <p>
                  {item.content}
              </p>
          </div>
      </div>
    </div>
  )
}

export default ForumDetail