import { fadeInReverseAnimationVariant, fadeInWidthAnimationVariant } from '@/components/animation/variant'
import NavUser from '@/components/layout/nav-user'
import { Button } from '@/components/ui/button'
import { Books } from '@/interface/Books'
import { useGetAllBooksQuery } from '@/store/slice/books.service'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router'

const Collections = () => {
  
    const {data : books, error} = useGetAllBooksQuery({})
    if (error) return <p>Error fetching books!</p>


    return (
    <div>
        <NavUser />
        <div className='px-32 flex flex-col gap-16'>
            <div className=''>
                <h1 className='font-semibold text-2xl mt-5'>Collections</h1>
                <p>Lorem ipsum dolor sit amet consectetur,</p>
            </div>

            <div className=''>
                <div className='grid grid-cols-5 gap-10'>
                    {books?.data?.map((item:Books, i:number) => (
                        <motion.div className={`flex flex-col gap-5  ` } variants={fadeInWidthAnimationVariant} initial="initial" whileInView={"animate"} custom={i}   viewport={{once:false, }} > 
                            <p className='text-2xl font-bold text-gray-800'>{item.book_title}</p>
                            <div  className='relative z-20 mt-5' >
                                <img src={item.cover_image} alt={item.cover_image} width={200} className='border-r-2 border-y-2 border-black '/>
                                <div className={`absolute inset-y-[5%] w-[86%]   grid place-content-center  -z-20  bg-purple-300 shadow-lg border-r-2 border-y-2 border-black ${i % 2 !== 1 ? 'bg-purple-100' : 'bg-violet-100'}`} />
                            </div>
                            <p className='text-xl font-semibold mt-10'>{item.author}</p>
                            <p className='text-xs italic'>{item.description}</p>
                            <p className='text-sm'>Publisher : {item.publisher}</p>
                            <p className='text-sm'>Kategori :  {item.category_name}</p>
                            <p className='text-sm'>Tahun Terbit : {item.year_published}</p>
                            <Link to={`/books/${item.id}`}>
                                <Button className='bg-white border-2 hover:text-white border-black text-black'>
                                    View
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collections