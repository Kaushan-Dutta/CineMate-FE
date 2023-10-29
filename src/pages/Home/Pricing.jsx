import React from 'react';
import {SubscribePlans } from '../Static'
import { Payment } from '../../api/User/Payment';
const Plans=()=>{
    const {handleClick}=Payment();
    return (
        <>
        {SubscribePlans.map((obj,id)=>(
            <div className='h-[600px] m-5 p-10 border border-primary rounded-md hover:shadow-md w-[350px] flx-col gap-5 bg-[#ffff] text-[#424242]'>
                <div className='text-center'>
                    <p className='text-4xl '><b>{obj.plan} Plan</b></p>
                </div>
                <div className='flx-row justify-between my-3'>
                        <div className=''>
                            <p className='text-2xl'><b>{obj.apiCredits}</b></p>
                            <p className='text-shade2'>API Credits</p>
                        </div>
                        <div className=''>
                            <p className='text-2xl'><b>${obj.price}</b></p>
                            <p className='text-shade1'>monthly</p>
                        </div>
                </div>
                <div className=''>
                    <p className='text-black'><b>Discover</b></p>
                </div>
                <div className=''>
                    {obj.discover.map(element => (
                       <p>✔&nbsp;&nbsp;{element}</p> 
                    ))}
                    
                </div>
                <br/>
                <button className='primary-btn bottom-4 relative' onClick={handleClick}>Select Plan</button>
            </div>
            ))}
        </>
        
    )
}

const Pricing=()=>{
    return(
        <div className='base-container text-black flx-row justify-center'>
            <div className='base-container flx-col gap-20'>
                <div className='w-full md:w-[60%] mx-auto text-center flx-col gap-5'>
                <p className='text-4xl '><b>Our <span className='text-shade2'>Subscription plans</span></b></p>
                <p className='text-md '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magni deleniti neque omnis impedit, repudiandae commodi optio cumque</p>
                </div>
                <div className='flx-row flex-wrap justify-center'>
                    <Plans/>                    
                </div>
            </div>
        </div>
    )
}
export default Pricing