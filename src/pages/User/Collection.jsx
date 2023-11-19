import React,{useEffect} from 'react';
import CreateCollection from '../../components/Popups/CreateCollection';
import GetCollections from '../../api/User/Collection';
import { userData } from '../../context/UserProvider';

const Collection=()=>{
    const array=[]
    const {collections}=GetCollections();
    const {profile}=userData();

  /*   useEffect(()=>{
        console.log("Collections",collections);
    },[]) */

    return(
        <>
            <div className="">
                <p className="text-lg text-primary tracking-widest"><b>COLLECTION/</b></p>
                <p className='text-2xl text-slate-600'>{profile?.email.split('@')[0]}</p>
            </div>
            <div className=' flx-col justify-center items-center'>
                <h1 className='my-10 text-2xl text-primary tracking-widest'><b>Your Collection</b></h1>
                <div className='flx-col gap-5'>
                    {
                        collections?.map((obj,id)=>(
                            <div className='' key={id}>
                                <p className='font-inter text-xl text-primary'>{obj.collectionName}</p>
                                <div  className='m-5  cursor-pointer grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1' >
                                    {obj.contents?.map((item,index)=>{
                                        return(
                                            <div key={index}>
                                                <video autoPlay muted loop className='w-[400px] ' >
                                                    <source src={item.url} type="video/mp4" />
                                                </video>
                                                <p className='relative text-center -translate-y-10 text-white text-xl'><b>{item?.description}</b></p> 
                                            </div>                   
                                        )
                                    })}
                                    
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
                <CreateCollection/>
            </div>
        
        </>
    )
}
export default Collection