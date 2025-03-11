import React from 'react'
import { FaRegUser, FaUserCircle } from 'react-icons/fa'
import { Link, Links } from 'react-router'
import { IoIosArrowDown } from "react-icons/io";
import { HOVERCONSTANT } from '@/constant/user/USERCONSTANT';
import { Button } from '../ui/button';
import { useLogoutMutation } from '@/store/slice/auth.service';
import { RiLogoutBoxLine } from "react-icons/ri"

const NavUser = () => {

    const [logout] = useLogoutMutation()


    async function handleLogout() {
        try {
            await logout().unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className='justify-between flex items-center px-32 p-5 top-0 start-0 sticky bg-white z-50'>
            <Link to={"/"}>
                <button className='text-xl flex items-center gap-1 '>
                    <span className='bg-gradient-to-t from-violet-500 px-2 rounded-md to-purple-700 font-bold text-white'>E</span><span className='text-purple-800 font-bold'>-</span>
                    <span className='font-semibold'>Litera</span>
                </button>
            </Link>
            <ul className='flex justify-center items-center gap-10'>
                <Link to={'/home'}>
                    <li>
                        Dashboard
                    </li>
                </Link>
                <Link to={'/collections'} >
                    <li>
                        Collections
                    </li>
                </Link>
                <Link to={'/forum'} >
                    <li>
                        Forum
                    </li>
                </Link>
            </ul>

            <div className='group relative inline-block'>
                <div className='flex items-center gap-2'>
                    <FaUserCircle className='text-3xl' />
                    <IoIosArrowDown />
                </div>
                <div className='flex flex-col right-0 w-48 gap-2 items-start  mt-5 px-5 opacity-0 absolute group-hover:opacity-100 duration-500 '>
                    {HOVERCONSTANT.map((hover, i) => (
                        <Link to={hover.route} className='w-full'>
                            <p key={i} className={`flex items-center gap-2 ${i % 2 !== 1 ? 'hover:bg-purple-500 hover:text-white' : 'bg-white'} duration-300 text-xs w-full py-2 rounded-md px-1 font-semibold`}>
                                {hover.icon}
                                {hover.text}
                            </p>
                        </Link>
                    ))}
                    <Button className='flex font-semibold' onClick={() => handleLogout()}>
                        <RiLogoutBoxLine />
                        Logout
                    </Button>
                </div>

            </div>
        </nav>
    )
}

export default NavUser