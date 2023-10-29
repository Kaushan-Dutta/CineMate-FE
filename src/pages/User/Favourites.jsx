import React,{useEffect} from 'react';
import Favourite from '../../api/User/Favourites';

const Favourites=()=>{
    const {favourites}=Favourite();
    
    return(
        <>
            <div className="">
                <p className="text-lg text-primary tracking-widest"><b>FAVOURITES/</b></p>
                <p className='text-2xl text-slate-600'>{window.location.pathname.split('/')[1]}</p>
            </div>
            <div className=' text-center'>
                <h1 className='my-10 text-2xl text-primary tracking-widest'><b>Your Favourites</b></h1>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1'>
                    {
                        favourites.map((obj,id)=>(
                            <div key={id} className='m-5  cursor-pointer overflow-hidden ' >
                                <video autoPlay muted loop className='w-[400px] hover:scale-105' >
                                <source src={obj?.url} type="video/mp4" />
                                </video>
                                <p className='relative -translate-y-10 text-white text-md'><b>{obj?.description}</b></p>                    
                            </div>
                        ))
                    }
                </div>
            </div>
        
        </>
    )
}
export default Favourites