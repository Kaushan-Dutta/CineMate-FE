import React, { useState } from 'react'
import { userData } from '../../context/UserProvider'
import { useAuth0 } from '@auth0/auth0-react'
import { ImCross } from 'react-icons/im';
import CollectionApi from '../../api/User/Collection';


const CreateCollection = () => {
  const [popup, setPopup] = useState(false)
  const { name, setName, createCollection } = CollectionApi();
  const { isLoading, user, isAuthenticated } = useAuth0();

  const Collection = () => {
    return (
      <div className='popup-window primary-container font-inter'>
        <div className='md:w-1/3 w-full rounded-md p-5 bg-light font-inter flx-col gap-5'>
          <div className='flx-row justify-end text-theme mb-3'>
            <button onClick={() => { setPopup(false) }}><ImCross /></button>
          </div>
          <form className='flx-col gap-3' onSubmit={createCollection}>
            <input className='p-2 rounded-md  w-full' placeholder='Your collection name' type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
            <button type='submit' className='primary-btn w-[100px] mx-auto'>Create</button>
          </form>
        </div>
      </div>
    )
  }
  return (
    popup ? <Collection /> : <button className='primary-btn w-[200px]' onClick={() => setPopup(true)}>Create Collection</button>

  )
}

export default CreateCollection