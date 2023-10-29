import { PiShapesLight } from 'react-icons/pi';
import { MdSportsGymnastics } from 'react-icons/md';
import { MdOutlineEmojiNature } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { MdBiotech } from 'react-icons/md';
import { MdOutlineEmojiEvents } from 'react-icons/md';
import { BsShare } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import { MdOutlineCollections } from 'react-icons/md';
import { HiOutlineHeart } from 'react-icons/hi';

export const Categories=[
    {
        name:"All",
        query:"/",
        icon:<PiShapesLight/>,
    },
    {
        name:"Sports",
        query:"sports",
        icon:<MdSportsGymnastics/>,
    },
    {
        name:"Nature",
        query:"nature",
        icon:<MdOutlineEmojiNature/>,
    },
    {
        name:"People",
        query:"people",
        icon:<BsPeopleFill/>,
    },
    {
        name:"Technology",
        query:"tech",
        icon:<MdBiotech/>,
    },
    {
        name:"Events",
        query:"events",
        icon:<MdOutlineEmojiEvents/>,
    }
]
export const Navigation=[
    {
        name:"Pricing",
        path:"/pricing",
        onNav:true,
        onFooter:true,
        
    },
    {
        name:"Categories",
        path:"/search",
        onNav:true,
        subNav:true,
    },
    {
        name:"Collections",
        path:"/search",
        onFooter:true
    },
    {
        name:"Blog",
        path:"/blog",
        onFooter:true
    },
    {
        name:"Faq",
        path:"/support",
        onFooter:true
    },
    
    {
        name:"Profile",
        path:'',
        onProfile:true,
        isProtected:true,
        icon:<BsPeopleFill/>,
    },
    {
        name:"Downloads",
        path:'/downloads',
        onProfile:true,
        isProtected:true,
        icon:<BsDownload/>,
    },

    {
        name:"Favourites",
        path:'/favourites',
        onProfile:true,
        isProtected:true,
        icon:<HiOutlineHeart/>
    },
    {
        name:"Collection",
        path:'/collection',
        onProfile:true,
        isProtected:true,
        icon:<MdOutlineCollections/>,
    }
]