import React,{useCallback,createContext,useContext,useEffect,useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
export const Data=createContext();

const UserProvider = ({children}) => {

  const { isLoading,user,isAuthenticated} = useAuth0();  
  const [profile,setProfile]=useState();
  const [content,setContent]=useState();

  useEffect(()=>{
    const loadContents=async()=>{

        if(user && isAuthenticated){
            try{
                //console.log(user);
                const getProfile=await axios.post('http://localhost:5000/user/auth',user);
                //console.log(getProfile.data.data[0]);
                setProfile(getProfile.data.data[0]);
            }
            catch(err){
                console.log(err);
            }
        }}
    loadContents();
  },[user,isAuthenticated])


  return (
    <Data.Provider value={{profile,setProfile,content,setContent}}>
        {children}
    </Data.Provider>
  )
}
export const userData=()=>{return useContext(Data)};
export default UserProvider
