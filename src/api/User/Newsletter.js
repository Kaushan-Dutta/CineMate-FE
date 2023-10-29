import React,{useState,useCallback} from 'react'

const Newsletter = () => {
  const [loading,setLoading]=useState(false);
  const [email,setEmail]=useState('');

  const createList=[{
    type:'text',
    placeholder:'Enter your email address',
    onchange:(e)=>{
        setEmail(e.target.value)
    }
  }]
  return (
    {createList,loading,setLoading}
  )
}

export default Newsletter