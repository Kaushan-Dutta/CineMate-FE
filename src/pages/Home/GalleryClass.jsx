import React from 'react'
import {  Gallery } from '../Static';

const GalleryClass = () => {
  return (
      <section className='primary-container flx-col gap-5'>
          <p className='text-3xl text-[#424242] '>UNLOCK YOUR INNER <span className='text-shade2'>CREATOR</span></p>
          <p className='text-xl text-[#777777]'>Get the inspiration you need with these collections carefully selected to boost your project’s engagement.</p>
          <div className='grid grid-cols-2 md:grid-cols-4  gap-5 my-10'>
            {Gallery.map((obj, id) => (
              <video autoPlay muted loop className={obj.className} key={id}><source src={obj.video} type="video/mp4" /></video>
            ))}
          </div>
      </section>  )
}

export default GalleryClass