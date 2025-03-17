import { useGetAllBorrowedBooksQuery, useReturnBorrowedBookMutation } from '@/store/slice/borrow.service'
import { BorrowedBook } from "@/interface/BorrowedBook";
import React, { useState } from 'react'
import NavUser from '@/components/layout/nav-user';
import { data } from 'react-router';
import { Button } from '@/components/ui/button';
import { MdNumbers } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeInAnimationVariant, fadeInReverseAnimationVariant, fadeInWidthBorrowBookAnimationReverseVariant, fadeInWidthBorrowBookAnimationVariant } from '@/components/animation/variant';
import { FaBook } from 'react-icons/fa';
import { Toaster, toast } from "sonner";
import Loading from '@/components/loading/loading';
import { useUserQuery } from '@/store/slice/auth.service';

const BorrowedBookPage = () => {

  const { data: borrow, isLoading, isError } = useGetAllBorrowedBooksQuery({})
  const [returnBook] = useReturnBorrowedBookMutation()
  const { data: currentUser, isLoading: isUserLoading } = useUserQuery()


  if (isLoading) return <Loading />
  if (isError) return <p>Error Fetching Borrowed Books!</p>

  const handleReturn = async (borrowedId: number) => {
    try {
      await returnBook(borrowedId).unwrap()
      toast.success(`Buku berhasil dikembalikan!`);
    } catch (error) {
      console.log(error)
      alert("Book failed to return!")
    }
  }

  return (
    <div>
      <NavUser />
      <div className='px-32'>
        <div className='flex flex-col gap-5'>
          <div className='text-4xl mt-5 gap-3 flex items-center'>
            <motion.p variants={fadeInWidthBorrowBookAnimationReverseVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
              <FaBook className='skew-y-12' />
            </motion.p>
            <motion.h1 className='font-semibold' variants={fadeInReverseAnimationVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
              Borrowed Books
            </motion.h1>
            <motion.p variants={fadeInWidthBorrowBookAnimationVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
              <FaBook className='rotate-180 skew-y-12' />
            </motion.p>
          </div>
          <motion.p variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{ once: false, }}>
            Lorem ipsum dolor sit amet consectetur
          </motion.p>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {borrow?.data?.filter((item: BorrowedBook) => item.user_id === currentUser?.id).length === 0 ? (
            <p className='font-bold'>Haven't borrowed any books yet</p>
          ) : (
            borrow?.data?.map((item: BorrowedBook, index: number) => (
              item.user_id === currentUser?.id && (
                <motion.div
                  key={index}
                  variants={fadeInWidthBorrowBookAnimationVariant}
                  initial="initial"
                  whileInView={"animate"}
                  custom={index}
                  viewport={{ once: false }}
                  className="bg-white rounded-lg border-2 border-gray-200 p-6 flex flex-col items-start gap-4"
                >
                  <p className="text-lg font-semibold text-gray-800 flex items-center"><MdNumbers /> {item.id}</p>
                  <div className='flex flex-col'>
                    <p className="text-lg font-semibold text-gray-800">Book Name:</p>
                    <p>{item.book_title}</p>
                  </div>
                  <div className='relative z-20'>
                    <img src={item.cover_image} alt={item.book_title} width={200} className="z-20 border-r-2 border-y-2 border-black" />
                    <div className={`absolute inset-y-[5%] w-[122%] grid place-content-center -z-10 bg-purple-300 border-r-2 border-y-2 border-black ${index % 2 !== 1 ? 'bg-purple-100' : 'bg-violet-100'}`} />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-lg font-semibold text-gray-800'>Borrow Date:</p>
                    <p className="text-sm text-gray-600">{item.borrow_date}</p>
                  </div>

                  {item.status !== "returned" ? (
                    <Button
                      onClick={() => handleReturn(item.id)}
                      className="text-white rounded-lg w-full"
                    >
                      Return Book
                      <Toaster position="top-right" richColors />
                    </Button>
                  ) : (
                    <div>
                      <p className="text-green-600 font-medium">Returned</p>
                      <p className='text-gray-400'>{item.borrow_date}</p>
                    </div>
                  )}
                </motion.div>
              )
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default BorrowedBookPage