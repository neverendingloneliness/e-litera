import { useGetAllRatingQuery, usePostRatingMutation } from "@/store/slice/review.service";
import React, { useMemo, useState } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { toast, Toaster } from "sonner";

const Stars = ({ bookId } : { bookId:number }) => {

  const {data : getRating} = useGetAllRatingQuery({})
  const [addRating] = usePostRatingMutation()
  const [rating, setRating] = useState(0)

  const bookRatings = useMemo(() => {
    return getRating?.data?.filter((rating: any) => rating.book_id === bookId) || [];
  }, [getRating, bookId])

  const averageRating = useMemo(() => {
    if (bookRatings.length === 0) return 0;
    const total = bookRatings.reduce((sum:any, rating:any) => sum + rating.rating, 0);
  return total / bookRatings.length;
  }, [bookRatings])

  async function handleRating(values:number) {
    setRating(values)
    try {
      const response = await addRating({
        book_id : bookId,
        rating : values
      }).unwrap()
      toast.success(`Rating Berhasil!`);
      console.log("Response:", response)
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <div className="flex gap-1 ">
      {[...Array(5)].map((_, index) => {
        index += 1
        return (
          <button
            key={index}
            type="button"
            className="focus:outline-none hover:text-yellow-500 duration-300"
            onClick={() => handleRating(index)}
            
          >
            {averageRating >= index ? (
                <IoIosStar className="text-yellow-500 text-3xl" />
              ) : averageRating >= index - 0.5 ? (
                <IoIosStarHalf className="text-yellow-500 text-3xl" />
              ) : (
                <IoIosStarOutline className="text-gray-400 text-3xl" />
              )}
            <Toaster position="top-right" richColors />
          </button>
        )
      })}
    </div>
  )
}

export default Stars;
