import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import AnimatedIconModal from './animated-icon/animated-icon'
import { usePostBorrowedBooksMutation } from '@/store/slice/borrow.service'
import { Link } from 'react-router'
import { Button } from '../ui/button'


const AlertBorrow  = ({ bookId } : { bookId:number } ) => {

  const [addBorrow] =  usePostBorrowedBooksMutation()
  async function handleSubmit() {

    try {
      const response = await addBorrow({
        book_id : bookId,
        borrow_date: new Date().toISOString(),
        return_date: new Date().toISOString(),
      }).unwrap()
      console.log("Response:", response)
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <AlertDialog>
      <div className='flex justify-center flex-row-reverse items-center gap-10'>
          <AlertDialogTrigger>Borrow</AlertDialogTrigger>
          <Link to={'/collections'}>
                <Button className='bg-white border-2 border-purple-400 hover:text-white hover:bg-purple-400 text-black hover:'>
                      Return 
                </Button>
          </Link>
      </div>
      <AlertDialogContent className='flex flex-col justify-center items-center'>
        <AlertDialogHeader className='flex flex-col justify-center items-center'>
          <AnimatedIconModal />
          <AlertDialogTitle>Are You Sure?</AlertDialogTitle>
          <AlertDialogDescription className='text-center'>
              You are about to borrow this book. The return deadline is within 7 days.  
              Are you sure you want to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleSubmit()}>Confirm Borrow</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertBorrow