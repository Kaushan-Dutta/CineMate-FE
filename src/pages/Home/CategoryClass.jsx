import React from 'react';
import { Category } from '../Static';

const CategoryClass=()=>{
    return(
        <section className='base-container flx-col gap-5'>
            <p className='text-3xl text-[#424242] '>UNLOCK YOUR INNER <span className='text-shade2'>CREATOR</span></p>
            <p className='text-xl text-[#777777]'>Get the inspiration you need with these collections carefully selected to boost your project’s engagement.</p>
            <div className='flx-row justify-between overflow-hidden overflow-x-auto space-x-10 my-10'>
            {Category.map((obj, id) => (
                <div key={id} className='w-[300px] h-[370px] rounded-xl flex-shrink-0 cursor-pointer overflow-hidden transition-all ease-out duration-300 '  >
                <img src={obj.image} className='  w-full h-full hover:scale-105' />
                <p className={`relative  tracking-widest text-white text-xl  ${obj.className}`}><b>{obj.name}</b></p>
                </div>
            ))}
            </div>
        </section>)
}
export default CategoryClass;