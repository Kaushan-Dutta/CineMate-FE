import React,{useCallback,useEffect, useState} from 'react'
import {Outlet} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../components/Loader';

const UserWrapper = () => {

  const { isLoading,user} = useAuth0();  
  const [profile,setProfile]=useState();


  if (isLoading ) return <Loader/>
  if(!user){
    window.location.href='/'
  }
  return (
    <div className=' large-container flx-col gap-10 '>
            
            <Outlet/>
    </div>
  )
}

export default UserWrapper