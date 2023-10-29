import React, { useState,useEffect,useCallback } from 'react'
import { useQuery, gql,useMutation } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import storage from '../Configure/appwrite.config';

const getDownloads=gql`
    query GetDownloads($email:String!){
      getDownloads(email:$email){
        description
        url
        owner {
          
          profile
          username
          
        }
      }
    }
`
const addDownloads=gql`
    mutation AddDownloads($userEmail:String!,$contentId:String!){
        addDownloads(userEmail:$userEmail,contentId:$contentId){
            description
            url
        }
    }
`
const Downloads=()=>{

  const { user} = useAuth0();  
  const [downloads,setDownloads]=useState([]);

  const { refetch } = useQuery(getDownloads);
  const [addownload]=useMutation(addDownloads)
  useEffect(()=>{
    FetchDownloads();
  },[])

  const handleDownload = async (fileId) => {
    try {
      
      const result = await storage.getFileDownload(import.meta.env.VITE_APP_APPWRITE_BUCKET, fileId);
      //console.log(result.href);
      const response = await axios.get(result.href, {
        responseType: 'arraybuffer',
      });
  
      const blob = new Blob([response.data], { type: 'video/mp4' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'your-video.mp4'; // Set the desired file name with the .mp4 extension
      a.click();
      window.URL.revokeObjectURL(url); 
    } catch (error) {
      console.error('File download error:', error);
    }
  };

  const AddDownloads=async(fileId)=>{
      try{
        const res=await addownload({
          variables:{
             userEmail:user?.email,
             contentId:window.location.pathname.split('search/')[1]
          }
        })
        if(res){
          handleDownload(fileId)
        }
        //console.log(res);
        toast.success("Added to download") 
      }
      catch(err){
        console.log(err)
        toast.error("Unable to download")
      }
   }
   const FetchDownloads = useCallback(async()=>{
    const downloads=await refetch({
      email:user?.email      
    })
    setDownloads(downloads.data.getDownloads);
 },[AddDownloads])

 return {downloads,AddDownloads}
}
export default Downloads;