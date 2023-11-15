import React,{useEffect} from 'react';
import Download from '../../api/User/Downloads';
import { userData } from '../../context/UserProvider';

const Downloads=()=>{
    const {downloads}=Download();
    const {profile}=userData();


    useEffect(()=>{
       const loadContents=async()=>{
            console.log(downloads,profile)

        }
        loadContents(); 
    },[])

    return(
        <>
            <div className="">
                <p className="text-lg text-primary tracking-widest"><b>DOWNLOADS/</b></p>
                <p className='text-2xl text-slate-600'>{profile?.email.split('@')[0]}</p>
            </div>
            <div className=' text-center'>
                <h1 className='my-10 text-2xl text-primary tracking-widest'><b>Your Downloads</b></h1>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1'>
                    {
                        downloads.map((obj,id)=>(
                            <div key={id} className='m-5  cursor-pointer overflow-hidden transition-all ease-out duration-300' onClick={()=>navigate(`${id}`)}>
                                <video autoPlay muted loop className='w-[400px] hover:scale-105' >
                                <source src={obj?.url} type="video/mp4" />
                                </video>
                                <p className='relative -translate-y-10 text-white text-xl'><b>{obj?.description}</b></p>                    
                            </div>
                        ))
                    }
                </div>
            </div>
        
        </>
    )
}
export default Downloads