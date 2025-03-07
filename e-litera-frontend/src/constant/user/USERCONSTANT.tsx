import { FaRegUser } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

export const HOVERCONSTANT = [
    {
        icon:<FaRegUser />,
        text:"Profile",
        route:"/profile"
    },
    {
        icon:<IoBookSharp />,
        text:"Borrowed Books",
        route:""
    },
    {
        icon:<MdOutlineLogout />,
        text:"Logout",
        route:""
    }
]