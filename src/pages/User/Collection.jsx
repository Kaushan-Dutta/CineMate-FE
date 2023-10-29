import React from 'react';
const Collection=()=>{
    const array=[1,2,3,4.5]
    return(
        <>
            <div className="">
                <p className="text-lg text-primary tracking-widest"><b>COLLECTION/</b></p>
                <p className='text-2xl text-slate-600'>kaushan5409</p>
            </div>
            <div className=' text-center'>
                <h1 className='my-10 text-2xl text-primary tracking-widest'><b>Your Collection</b></h1>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1'>
                    {
                        array.map((obj,id)=>(
                            <div key={id} className='m-5  cursor-pointer overflow-hidden transition-all ease-out duration-300' onClick={()=>navigate(`${id}`)}>
                                <video autoPlay muted loop className='w-[400px] hover:scale-105' >
                                <source src="https://cloud.appwrite.io/v1/storage/buckets/652189848a2604d0b671/files/65230921b217dac34a18/view?project=652188b1172fe1759f45&mode=admin" type="video/mp4" />
                                </video>
                                <p className='relative -translate-y-10 text-white text-xl'><b>Video Management</b></p>                    
                            </div>
                        ))
                    }
                </div>
            </div>
        
        </>
    )
}
export default Collection