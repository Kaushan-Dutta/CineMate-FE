import React from 'react'
import {Navigation} from '../router.config';
import { Link } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';



const Social=[
    {
        icon:<FaLinkedinIn/>,
        link:''
    },
    {
        icon:<FaFacebookF/>,
        link:''
    },
    {
        icon:<FaInstagram/>,
        link:''
    },
    {
        icon:<FaTwitter/>,
        link:''
    },
    
    {
        icon:<SiHashnode/>,
        link:''
    },
    
]
const Footer = () => {
  return (
    <footer className=' w-full bottom-0 overflow-hidden bg-theme primary-container text-white'>
        <div className='footer '>
            <div className=''>
                <Link to="/" className='logo'>CineMate</Link>
            </div>
            <div className='flx-row space-x-7 md:translate-x-10'>
                {
                    Social.map((item,index)=>(
                        <li key={index} className='text-xl '>
                            <Link to={item.link} >{item.icon}</Link>
                        </li>
                    ))
                }
            </div>
            <div className='flx-row space-x-5 '>
                {
                    Navigation.filter((obj)=>obj.onFooter).
                    map((item,index)=>(
                        <li key={index}>
                            <Link to={item.path} >{item.name}</Link>
                        </li>
                    ))
                }
            </div>
            
        </div>
        <hr className='my-5'/>
        <div className='text-center'>
            <p>Copyright 2023 | All rights and reserved | Cine Mate</p>
        </div>
    </footer>
  )
}

export default Footer