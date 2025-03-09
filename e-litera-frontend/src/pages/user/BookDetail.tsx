import { fadeInAnimationVariant, fadeInWidthAnimationVariant } from '@/components/animation/variant';
import NavUser from '@/components/layout/nav-user';
import {  useGetDetailBookQuery } from '@/store/slice/books.service';
import { motion } from 'framer-motion';
import React from 'react';
import { Link, useParams } from 'react-router';
import BookNotFound from '../error/book-detail/book-notFound';
import Stars from '@/components/ui/stars';
import AlertBorrow from '@/components/modal/borrow-book';
import { Button } from '@/components/ui/button';

const BookDetail = () => {
  const { id } = useParams()  ;

  const { data: book, error, isLoading } = useGetDetailBookQuery(id);

  if (isLoading) return <p>Loading book details...</p>;
  if (error) return <BookNotFound />
  if (!book?.data) return <p>No book found!</p>;

  const item = book.data; 

  return (
    <div className="flex flex-col gap-10">
      <NavUser />  
      <motion.div 
        className="flex flex-col items-center gap-5"
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      > 
        <p className="text-2xl font-bold text-gray-800">{item.book_title}</p>
        <div className="relative z-20 mt-5">
          <img src={item.cover_image} alt={item.book_title} width={200} className="border-r-2 border-y-2 border-black"/>
          <div className="absolute inset-y-[5%] w-[120%] grid place-content-center -z-20 bg-purple-300 shadow-lg border-r-2 border-y-2 border-black" />
        </div>
        <p className="text-xl font-semibold mt-10">{item.author}</p>
        <p className="text-sm italic w-96 text-center">{item.description}</p>
        <p className="text-sm">Publisher: {item.publisher}</p>
        <p className="text-sm">Kategori: {item.category_name}</p>
        <p className="text-sm">Tahun Terbit: {item.year_published}</p>
        <a href={item.pdf_url} target='_blank'>Pdf</a>
        <Stars bookId={id ? parseInt(id, 10) : 0} />
        <AlertBorrow bookId={id ? parseInt(id,10) : 0} />
        
      </motion.div>
    </div>
  )
}

export default BookDetail
