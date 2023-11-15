import React,{useEffect,useState} from 'react'
import { BsShare } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import { MdOutlineCollections } from 'react-icons/md';
import { HiOutlineHeart } from 'react-icons/hi';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'
import Favourites from '../../api/User/Favourites';
import Downloads from '../../api/User/Downloads';
import AddCollection from '../../components/Popups/AddCollection';

const get_content = gql`
  query GetContent($id:String!) {
    getContent(id: $id) {
      _id
      type
      url
      fileId
      description
      owner {
        profile
        username
      }
    }
  }
`;

const Content = () => {
    const [content,setContent]=useState();
    const [video,setVideo]=useState();
    const {AddFavourites}=Favourites();
    const {AddDownloads}=Downloads();
    const [popup,setPopup]=useState(false);


    const { refetch } = useQuery(get_content);
    useEffect(()=>{
        const loadContent=async()=>{
            
            const res=await refetch({
                id: window.location.pathname.split('search/')[1]
             })
            setVideo(res.data.getContent.url)
            setContent(res.data.getContent);
        }
        
        loadContent();
    },[])
    const handleFavourite=async()=>{
        await AddFavourites()
    }
    const handleDownload=async()=>{
        await AddDownloads(content?.fileId)
    }
    return (
        <div className='base-container'>
            <div className='primary-container flx-col  md:flex-row items-center justify-between flex-wrap '>
                <div className='flx-col gap-5 md:w-1/2 '>
                    <video controls className='w-[600px] ' >
                        {video && <source src={video} type="video/mp4" />}
                    </video>
                   
                    <div className='flx-row justify-center space-x-10 text-2xl  text-[#424242] m-5'>

                        <BsDownload className='cursor-pointer hover:text-black' onClick={handleDownload}/>

                        <MdOutlineCollections className='cursor-pointer hover:text-black' onClick={()=>setPopup(true)}/>
                        <BsShare className='cursor-pointer hover:text-black' onClick={()=>{navigator.clipboard.writeText(window.location.href);toast.success("URL Copied")}}/>

                        <HiOutlineHeart className='cursor-pointer hover:text-black' onClick={handleFavourite}/>

                    </div>
                </div>
                <div className='text-center md:w-1/2 flx-col gap-5 '>
                    <p className='text-2xl md:w-4/5 mx-auto'><b>{content?.description}</b></p>
                    <p>by&nbsp;<Link to={`/${content?.owner?.username}`} className='text-shade2'>{content?.owner?.username}</Link></p>
                    <button className='mx-auto flx-row justify-center w-[250px] p-3 text-lg rounded-lg text-white bg-shade1' onClick={handleDownload}><BsDownload/>&nbsp;&nbsp;<b>Download</b></button>
                </div>
            </div>
            {popup && <AddCollection setPopup={setPopup}/>}
        </div>
    )
}

export default Content