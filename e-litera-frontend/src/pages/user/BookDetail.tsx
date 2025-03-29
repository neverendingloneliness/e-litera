import { fadeInAnimationVariant, fadeInWidthAnimationVariant } from '@/components/animation/variant';
import NavUser from '@/components/layout/nav-user';
import { useGetDetailBookQuery } from '@/store/slice/books.service';
import { motion } from 'framer-motion';
import React from 'react';
import { Link, useParams } from 'react-router';
import BookNotFound from '../error/book-detail/book-notFound';
import AlertBorrow from '@/components/modal/borrow-book';
import { Button } from '@/components/ui/button';
import Loading from '@/components/loading/loading';
import Stars from '@/components/ui/stars';

const BookDetail = () => {
  const { id } = useParams();

  const { data: book, error, isLoading } = useGetDetailBookQuery(id);

  if (isLoading) return < Loading />
  if (error) return <BookNotFound />
  if (!book?.data) return <p>No book found!</p>;

  const item = book.data

  return (
    <div className="flex flex-col gap-10">
      <NavUser />
      <motion.div
        className="flex flex-col justify-center items-center gap-5"
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <div className='flex gap-20 items-center'>
          <div className='flex flex-col gap-10 items-start'>
            <div className='flex items-center gap-20'>
              <div className="relative z-20 mt-5">
                <img src={item.cover_image} alt={item.book_title} width={200} className="border-r-2 border-y-2 border-black" />
                <div className="absolute inset-y-[5%] w-[120%] grid place-content-center -z-20 bg-purple-300 shadow-lg border-r-2 border-y-2 border-black" />
              </div>
              <div className='flex flex-col gap-4'>
                <p className="text-2xl font-bold text-gray-800">{item.book_title}</p>
                <p className="text-xl font text-gray-400 ">{item.author}</p>
                <Stars bookId={item.id} />
                <p className='text-sm px-3 py-1 rounded-md border-2 border-gray-300 text-gray-700 bg-white w-fit'>{item.category_name}</p>
              </div>
            </div>
            <div className='flex flex-col gap-5 '>
              <h1 className='text-2xl font-bold'>Book Description</h1>
              <p className="text-lg italic w-[40rem] ">{item.description}</p>
              <p className="text-lg font-bold">Publisher : <span className='ml-1 text-sm px-3 font-normal py-1 rounded-md border-2 border-gray-300 text-gray-700 bg-white w-fit'>{item.publisher}</span></p>
              <p className="text-lg font-bold">Tahun Terbit : <span className='ml-1 text-sm px-3 py-1 font-normal rounded-md border-2 border-gray-300 text-gray-700 bg-white w-fit'>{item.year_published}</span> </p>
              {/* <a href={item.pdf_url} target='_blank'>Pdf</a> */}
            </div>

          </div>
        </div>
        <AlertBorrow bookId={id ? parseInt(id, 10) : 0} />
      </motion.div>
    </div>
  )
}

export default BookDetail
