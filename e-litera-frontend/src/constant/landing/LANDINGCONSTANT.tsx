import { title } from "process";
import { FaBook, FaUsers, FaCertificate, FaCloudDownloadAlt, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";


export const NAVLIST = [
    {
        key:"home",
        label:"Home"
    },
    {
        key:"about",
        label:"About"
    },
    {
        key:"features",
        label:"Features"
    },
    {
        key:"upcoming",
        label:"Upcoming Book"
    },
    {
        key:"contact",
        label:"Contact"
    },
    
]



export const FEATURESLIST = [
  {
    icon: FaBook,
    title: "Vast Digital Library",
    description: "Access thousands of digital books across multiple genres and subjects.",
  },
  {
    icon: FaUsers,
    title: "Community & Discussions",
    description: "Join discussions, share reviews, and engage with other readers.",
  },
  {
    icon: FaCertificate ,
    title: "Earn Certificates",
    description: "Complete courses and get certifications for your learning achievements.",
  },
  {
    icon: FaCloudDownloadAlt ,
    title: "Offline Access",
    description: "Download books and access them anytime, even without an internet connection.",
  },
]


export const UPCOMINGBOOK = {
  img: [
    { image: "/assets/landingAssets/upcoming/upcoming_1.webp" },
    { image: "/assets/landingAssets/upcoming/upcoming_2.webp" },
    { image: "/assets/landingAssets/upcoming/upcoming_4.webp" },
  ],
}

export const CONTACTLIST = [
  {
    icon:<FaInstagram />,
    namasosmed:"ivan.sahmura",
    linksosmed:"https://www.instagram.com/ivan.sahmura/",
  }, 
  {
    icon:<FaTiktok /> ,
    namasosmed:"ivansahmura",
    linksosmed:"https://www.tiktok.com/@ivansahmura?is_from_webapp=1&sender_device=pc",
  },
  {
    icon:<FaGithub /> ,
    namasosmed:"neverendingloneliness",
    linksosmed:"https://github.com/neverendingloneliness",
  }
]