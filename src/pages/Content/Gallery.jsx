import React,{useEffect,useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import CreateContent from '../../api/Content/index';


const Gallery = () => {
   
    const {gallery}=CreateContent();
    const navigate=useNavigate();
    const [type,setType]=useState();
    const [searchQuery,setSearchQuery]=useState();
    
    useEffect(()=>{
        const getSearch=async()=>{
            const search=window.location.search;
            const params=new URLSearchParams(search);
            

            //console.log(type,params.get('type'));
            //console.log(gallery);
            setType(params.get('type'));
            setSearchQuery(params.get('search'));
            //await gallery({type,searchQuery});
        }
        getSearch()
    },[window.location.search])
    
    return (
        
        
            
            <div className='  primary-container grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1'>
                {
                    gallery?.data?.getContents?.filter(item=>{
                        if(!type || type=='All'){
                            return item
                        }
                        return item.type==type
                    }).map((obj,id)=>{
                        //console.log(obj);

                        return(
                        <div key={obj.url} className='m-5   overflow-hidden '  loading="lazy" >
                            {obj?.url && <video autoPlay muted loop className='w-[400px] '>
                                <source src={obj.url} type="video/mp4" loading="lazy"/>
                            </video>}
                            <p className='relative -translate-y-10 px-5  text-white text-md hover:text-shade1' onClick={()=>{navigate(obj._id)}}><b>{obj.type}</b></p>                    
                        </div>)
                })
                }
            </div>
                
        
        
    )
}
export default Gallery