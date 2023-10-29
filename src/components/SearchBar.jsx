import React, { useState } from 'react'
import { Categories } from '../router.config'
import { Link } from 'react-router-dom'
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const navigate=useNavigate()
  const [search,setSearch]=useState('');
  return (
    <div className='w-full pr-10  flx-row justify-center bg-light font-inter h-[60px] text-black rounded-md'>
        <div className='w-1/5  h-full'>
            <select className="w-full h-full  outline-none bg-light rounded-md px-5" id="category">
            {
                Categories.map((item,index)=>(
                    <option value={item.name} key={index} className='flx-row'>{item.name}</option>
                ))
            }

            </select>
        </div>
        <div className='w-4/5 h-full flx-row  bg-light rounded-md'>
            <form className='w-full' onSubmit={(e)=>{
                e.preventDefault();
                navigate(`/search/?type=${document.getElementById('category').value}&search=${search}`)
            }}>
                <input type="text" placeholder='Search for the content' onChange={(e)=>{setSearch(e.target.value)}} value={search} className='bg-light w-full outline-none px-5 py-2'/>
            </form>
            <div className='w-[50px] flx-row justify-center '>
                <PiMagnifyingGlassLight className='text-black text-xl'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar