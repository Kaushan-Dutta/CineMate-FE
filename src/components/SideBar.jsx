import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im';
import { BiSolidDownArrow } from 'react-icons/bi';

import { Categories,Navigation } from '../router.config';
import { useAuth0 } from '@auth0/auth0-react';

const SideBar = ({sidebar,openSidebar}) => {
  const { isLoading,user,loginWithRedirect,logout } = useAuth0();        

  return (
    <div className='bg-light p-5 h-screen w-[300px] absolute z-10 flx-col gap-5 overflow-y-auto top-0 left-0 transition-all ease-out  '>
        <div className='flx-row justify-end'>
            <ImCross onClick={()=>openSidebar(!sidebar)} className='text-theme'/>
        </div>
        <div className='flx-col gap-5 justify-start -translate-x-10 text-primary'>
            {Navigation.filter((obj)=>(
                            obj.onNav
                        )).map((item,index) => {
                            return (
                                <div key={index} className='ml-10 uppercase  text-black'>
                                    {item.subNav?
                                    <>
                                    <p id="category" className='cursor-default flx-row justify-between '>{item.name}&nbsp;<BiSolidDownArrow className='text-xs'/> </p>

                                    <div className=' text-left w-[150px] px-5 rounded-md' id="dropdown">
                                        {Categories.map((item,index)=>(
                                            <Link to={item.path} key={index} className='p-2 rounded-md hover:text-primary '>
                                                <li className='flx-row'>{item.icon}&nbsp;&nbsp;{item.name}</li>
                                            </Link>
                                        ))}
                                    </div>
                                    </>:<Link to={item.path} className='hover:text-primary'>{item.name}</Link>}
                                </div>
                            )
            })}
            
        </div>
        <hr className='my-5'/>
        <div className=''>
        <li className=''>
                        {user?<button className='primary-btn w-full' onClick={logout}>Logout</button>:
                        <button className='primary-btn w-full' onClick={loginWithRedirect}>Login</button>}
        </li>
        </div>
    </div>
  )
}

export default SideBar