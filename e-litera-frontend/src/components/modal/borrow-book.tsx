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
import { toast, Toaster } from 'sonner'


const AlertBorrow  = ({ bookId } : { bookId:number } ) => {

  const [addBorrow] =  usePostBorrowedBooksMutation()
  async function handleSubmit() {

    try {
      const response = await addBorrow({
        book_id : bookId,
        borrow_date: new Date().toISOString(),
        return_date: new Date().toISOString(),
      }).unwrap()
      toast.success(`Buku berhasil dipinjam!`)
      console.log("Response:", response)
      window.location.reload()
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <AlertDialog>
      <div className='flex justify-center flex-row-reverse items-center gap-10'>
          <AlertDialogTrigger>Borrow</AlertDialogTrigger>
          <Link to={'/collections'}>
                <Button className='bg-white border-2 border-black hover:bg-black hover:text-white text-black'>
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
          <AlertDialogAction onClick={() => handleSubmit()}>
            Confirm Borrow
            <Toaster position="top-right" richColors />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertBorrow