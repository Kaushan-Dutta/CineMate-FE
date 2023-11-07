import React, { useState, useEffect ,Suspense,lazy} from 'react'

import SearchBar from '../../components/SearchBar';
import { BsArrowRightCircle } from 'react-icons/bs';
import axios from 'axios';
import { Category, Gallery, Section } from '../Static';
import toast from 'react-hot-toast';

const CategoryClass = lazy(() => import("./CategoryClass"));
const GalleryClass = lazy(() => import("./GalleryClass"));
import { Link } from 'react-router-dom';

const Landing = () => {

  const [email,setEmail]=useState();

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(email);
    try{
      await axios.post(`${import.meta.env.VITE_APP_BACKENED_URL}user/subscribe`,{email});
      toast.success("Subscribed Successfully")}
    catch(err){
      
      toast.error("Not Subscribed");
    }

  }  
  return (
    <>
      <div className='font-inter'>
        <section className='h-[80vh] banner flx-row justify-center primary-container bg-theme'>
          

            <div className=' md:w-3/5 w-full text-center flx-col gap-5 z-10 text-white'>
              <p className='text-6xl '><b>Stock <span className='text-shade1'>video footage</span></b></p>
              <p className='text-2xl font-mono lg:mb-10 '>Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</p>
              <SearchBar />

          </div>
        </section>
        
        <Suspense>
          <CategoryClass/>
        </Suspense>
        <section className='primary-container flx-col gap-5 text-center'>
          <p className='text-3xl text-[#424242]'>THE <span className='text-primary'>SMARTEST CHOICE</span> FOR CREATIVES LIKE YOU</p>
          <p className='text-xl text-[#777777]'>Whether you’re looking for designs or photographs, you’ll find the perfect asset on Freepik.</p>
          <div className='flx-row justify-between flex-wrap my-10'>
            {Section.map((item, index) => (
              <div key={index} className='bg-light rounded-lg w-[400px] h-[100px] flx-row justify-between space-x-5 px-6 hover:shadow-lg m-5'>
                <img src={item.image} className='w-[40px]' />
                <p className='text-primary text-md '><b>{item.title}</b></p>
                <a href={item.link}><BsArrowRightCircle className='text-3xl text-[#424242]' /></a>
              </div>
            ))}
          </div>
        </section>
        <Suspense>
          <GalleryClass/>
        </Suspense>
        <section className='base-container '>
          <div className=' bg-light rounded-3xl flx-row flex-wrap justify-between md:p-20 p-5'>
            <div className='md:w-full lg:w-2/5 text-left flx-col gap-5 my-5'>
              <p className='text-5xl text-theme'>Join CineMate’s <span className='text-shade1'>creator</span> community</p>
              <p className='text-lg'>Behind every stock image, there’s a creative mind. You can also create content and sell it on CineMate</p>
              <Link className='primary-btn w-[200px] test-white ' to="/search">Collection</Link>
            </div>
            <div className='lg:w-[500px] md:w-full my-5'>
              <img src="https://www.videvo.net/images/home/home-1.jpg " className='w-full' />
            </div>
          </div>
        </section>
        <section className='base-container '>
          <div className=' bg-primary rounded-3xl flx-col justify-center gap-5 text-center md:p-20 p-5'>
            <p className='text-5xl text-extra_light'>Sign Up our<span className='text-shade2'> Newsletter</span></p>
            <p className='text-xl text-white md:w-[70%] w-full mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium quos temporibus adipisci mollitia veritatis iure!</p>
            <form className='flx-row justify-between bg-light my-10 h-[70px] p-5 rounded-full mx-auto w-[90%] md:w-[50%] ' onSubmit={handleSubmit}>
              <input type="email" placeholder='Sign Up our newsletter' className=' px-5 py-2 w-full bg-light' onChange={(e)=>setEmail(e.target.value)}/>
              <button className="primary-btn w-[150px]" type="submit">Submit</button>
            </form>
          </div>
        </section>

      </div>
    </>
  )
}

export default Landing
