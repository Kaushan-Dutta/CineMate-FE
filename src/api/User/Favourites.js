import React, { useCallback, useEffect, useState } from 'react'
import { useQuery, gql,useMutation } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import toast from 'react-hot-toast';

const getFavourites=gql`
    query GetFavourites($email:String!){
        getFavourites(email:$email){
            description
            url
            owner {
          
              profile
              username
              
            }
        }
    }
` 
const addFavourites=gql`
    mutation AddFavourites($userEmail:String!,$contentId:String!){
        addFavourites(userEmail:$userEmail,contentId:$contentId){
            description
            url
        }
    }
`
const Favourites = () => {
  const { user} = useAuth0(); 
  const [favourites,setFavorites]=useState([]);

  const { refetch } = useQuery(getFavourites);
  const [addfav]=useMutation(addFavourites);

  useEffect(()=>{
    FetchFavourites();
  },[])
  
  const AddFavourites=async()=>{
    try{
        const res=await addfav({
        variables:{
        userEmail:user?.email,
        contentId:window.location.pathname.split('search/')[1]}
        })
        console.log(res);
        toast.success("Added to favourites") 

    }
    catch(err){
        console.log(err)
        toast.error("Unable to add")
    }
   
  }

  const FetchFavourites = useCallback(async()=>{

    const  favourites  = await refetch({
       email:user?.email
    });
    setFavorites(favourites.data.getFavourites);
  },[AddFavourites])

    return {favourites,AddFavourites}
 
}

export default Favourites