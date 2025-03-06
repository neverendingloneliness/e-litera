import React from 'react'
import { AiOutlineHome , AiOutlineLogout } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { Button } from '../ui/button';
import { Link } from 'react-router';


const Sidebar   = () => {
  return (
    <div className="pb-12 min-h-screen">
        <div className="space-y-4 py-4">
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">
                    Dashboard
                </h2>
                <div className="space-y-3">
                    <Link to={'/admin/dashboard'}>
                        <Button variant={'ghost'} className="w-full hover:bg-purple-100 justify-start rounded-none hover:text-primary">
                            <AiOutlineHome className="mr-2 text-lg"/>
                            Home
                        </Button>
                    </Link>
                </div>
                <div className="space-y-3">
                    <Link to={'/admin/dashboard/jurusan'}>
                        <Button variant={'ghost'} className="w-full hover:bg-purple-100 justify-start rounded-none hover:text-primary">
                            <IoBookOutline  className="mr-2 text-lg"/>
                            Collections
                        </Button>
                    </Link>
                </div>
                <div className="space-y-3">
                    <Link to={'/'}>
                        <Button variant={'ghost'} className="w-full hover:bg-purple-100 justify-start rounded-none hover:text-primary">
                            <MdOutlinePeopleAlt  className="mr-2 text-lg"/>
                            Chatting
                        </Button>
                    </Link>
                </div>
                <div className="space-y-3">
                    <Link to={'/'}>
                        <Button variant={'ghost'} className="w-full hover:bg-purple-100 justify-start rounded-none hover:text-primary">
                            <MdOutlinePeopleAlt  className="mr-2 text-lg"/>
                            Profile
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="space-y-4 py-4">
            <div className="px-3 py-2">
                <div className="space-y-3">
                    <Link to={'/'}>
                        <Button variant={'ghost'} className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none">
                            <AiOutlineLogout className="mr-2 text-lg"/>
                            Logout
                        </Button>
                    </Link>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Sidebar