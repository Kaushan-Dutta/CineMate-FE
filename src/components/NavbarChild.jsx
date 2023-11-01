import React, { useState,useCallback, useEffect } from 'react'
import { Navigation,Categories } from '../router.config';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSolidDownArrow } from 'react-icons/bi';
import { MdPerson } from 'react-icons/md';
import SideBar from './SideBar';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useFetcher } from 'react-router-dom';
import { userData } from '../context/UserProvider';

const Profile_Drop=()=>{
    const { user } = useAuth0();        
    const {profile}=userData();
    
    return(
        <div className='flx-col gap-5 py-5 px-1'>
                <div className='flx-row space-x-3'>
                    <div className=''>
                        <img src={user?.picture} alt="profile" className='w-[50px] h-[50px] rounded-full p-1 bg-blue-400'/>
                    </div>
                    <div className=''>
                        <p className='text-md'><b>{user?.email}</b></p>
                        <button className='bg-shade2 px-3  rounded-sm text-sm font-bold text-white'>Free</button>
                    </div>
                </div>
                <hr/>
                {profile && Navigation.filter((obj)=>(
                    obj.onProfile)).map((item,index)=>{
                    return(
                    <li key={index}>
                        <a href={`/${profile?.username}${item.path}`} className='uppercase  text-lg flx-row hover:text-primary'><span className='text-slate-500'>{item.icon}</span>&nbsp;&nbsp;<b>{item.name}</b></a>
                    </li>
                )
                    })}
        </div>
    )
}

const Category_Drop=()=>{
    return(
        <div className=''>
            <ul className=''>
                {Categories.map((item,index)=>{
                    return(
                    <li key={index}>
                        <Link to="/user">{item.name}</Link>
                    </li>
                )
                    })}
            </ul>
        </div>
    )
}

const Navbar = () => {
  const [sidebar,openSidebar]=useState(false)
  const { isLoading,user,loginWithRedirect,logout } = useAuth0();        
 
  return (
    <>
        <nav className=' hidden md:flex flex-row items-center justify-between' id="navbar_mx">
            <div className=''>
                <Link to="/" className='logo'>CineMate</Link>
            </div>
            <div className='flx-row justify-end space-x-10'>
                
                {Navigation.filter((obj)=>(
                obj.onNav
                )).map((item,index) => {
                return (
                    <div key={index} >
                      {item.subNav?
                      < div className="category cursor-pointer" >
                        <p  className=' flx-row justify-between '>{item.name}&nbsp;<BiSolidDownArrow className='text-xs'/> </p>

                        <div id="category_drop" className=' uppercase hidden absolute translate-y-8 bg-light text-black text-left w-[200px] px-5 rounded-sm ' >
                          {Categories.map((item,index)=>(
                          <Link to={`/search/?type=${item.query}`} key={index} className='p-2  hover:text-primary'>
                            <li className='flx-row'>{item.icon}&nbsp;&nbsp;{item.name}</li>
                          </Link>
                        ))}
                      </div>
                    </div>:<Link to={item.path} className={item.clasName}>{item.name}</Link>}
                                
                    </div>
                        )
                    })}
                    <li className='ml-10'>
                        {user?<button className='primary-btn-light w-[150px]' onClick={logout}>Logout</button>:
                        <button className='primary-btn-light  w-[150px]' onClick={loginWithRedirect}>Login</button>}
                    </li>
                    {user && 
                    <div className='category cursor-pointer'>
                        <img src={user?.picture} alt="profile" className='w-[50px] h-[50px] rounded-full p-1 bg-blue-400'/>
                        <div className='hidden absolute translate-y-5 -translate-x-52 bg-light text-slate-950 text-left w-[350px] px-5 rounded-md' id="category_drop">
                            <Profile_Drop/>
                        </div>
                    </div>}
                    
               
                
            </div>
          
        </nav>
        <nav className="md:hidden flx-row justify-between" id="navbar_mn">
            <div className='w-1/3 text-left text-4xl'>
                <button onClick={()=>openSidebar(!sidebar)}><RxHamburgerMenu/></button>
            </div> 
            <div className='w-1/3'>
                <Link to="/" className='logo'>CineMate</Link>
            </div>
            <div className='w-1/3 flx-row justify-end'>
            
                {user?<div className='category cursor-pointer'>
                            <img src={user?.picture} alt="profile" className='w-[50px] h-[50px] rounded-full p-1 bg-blue-400'/>
                            <div className='hidden absolute translate-y-5 -translate-x-72 bg-light text-slate-950 text-left w-[350px] px-5 rounded-md' id="category_drop">
                                <Profile_Drop/>
                            </div>
                        </div>:
                        <button className='text-white text-4xl '><b><MdPerson/></b></button>}
            
        </div>
        </nav>
        {sidebar && <SideBar sidebar={sidebar} openSidebar={openSidebar}/>}
    </>
  )
}

export default Navbar