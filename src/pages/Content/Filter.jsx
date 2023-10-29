import React,{useState} from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { TbFilterEdit } from 'react-icons/tb';
import { Filters } from '../Static';

const Filter = () => {
    const [filter,getFilter]=useState(false);
    return (
        <div className='flx-row filter -translate-x-[300px] h-screen'>
            <div className='w-[300px] bg-light h-full z-10 py-10 px-5 flx-col gap-5 overflow-y-auto flex-shrink-0'>
                <div className='flx-row text-xl'>
                    <TbFilterEdit className='text-3xl '/>&nbsp;&nbsp;<b className='text-slate-500'>FILTERS</b>
                </div>
                <hr/>
                {
                    Filters.map((obj,id)=>(
                        <div className='flx-col gap-2' id={obj.label} key={id}>
                            <label className='text-lg'><b>{obj.label}</b></label>
                            <div className=' grid grid-cols-2'>
                                {obj.inputs.map((option,id)=>(
                                    <p key={id}><input type="checkbox"/>&nbsp;&nbsp;{option}</p>
                                ))}
                            </div>
                        
                        </div>
                    ))
                }
                
                
                <div className='flx-col gap-2' id='Sort'>
                    <label>Sort on:</label>
                    <select id="sort" className='p-2 rounded-md my-2 '>
                        <option value="date">Date Created</option>
                        <option value="likes">Likes</option>
                        <option value="size">Video Size</option>
                    </select>
                </div>
                <hr/>
                <button className='primary-btn w-full'>Apply Filter</button>
            </div>
            <div className=''>
                <button className='w-[70px] h-[70px] rounded-full justify-end bg-primary text-light text-xl flx-row p-5  -translate-x-7 ' onClick={()=>{
                    if(filter){
                        document.querySelector('.filter').classList.add('-translate-x-[300px]')
                        getFilter(false);
                    }
                    else{
                        document.querySelector('.filter').classList.remove('-translate-x-[300px]')
                        getFilter(true);
                    }
                }}><BiSolidRightArrow/></button>
            </div>
          
        </div>
    )
}
export default Filter