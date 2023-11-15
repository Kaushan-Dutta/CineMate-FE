import React,{useEffect} from 'react'
import { ImCross } from 'react-icons/im';
import Collection from '../../api/User/Collection';

const AddCollection = ({setPopup}) => {
  const {collections,addtoCollection,setCollectionId}=Collection();
  useEffect(() => {
    if (collections.length > 0) {
      setCollectionId(collections[0]._id);
    }
  }, [collections]);
  return (
    <div className='popup-window primary-container font-inter'>
    <div className='md:w-1/3 w-full rounded-md p-5 bg-light font-inter flx-col gap-5'>
      <div className='flx-row justify-end text-theme mb-3'>
        <button onClick={() => { setPopup(false) }}><ImCross /></button>
      </div>
      <form className='flx-col gap-3' onSubmit={addtoCollection}>
        <select className='px-5 py-2 rounded-md  w-full' id="collection"  onChange={(e)=>setCollectionId(e.target.value)}>
          {collections.map((obj,id)=>(
            <option key={id} value={obj._id} >{obj.collectionName}</option>
          
          ))}
           
        </select>
        <button type='submit' className='primary-btn w-[200px] mx-auto'>Add to Collection</button>
      </form>
    </div>
  </div>
  )
}

export default AddCollection