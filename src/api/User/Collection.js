import React,{useState,useCallback,useEffect} from 'react'
import { useQuery, gql,useMutation } from '@apollo/client';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';

const CreateCollection=gql`
  mutation CreateCollection($collectionName:String!,$userEmail:String!){
    createCollection(collectionName:$collectionName,userEmail:$userEmail){
      collectionName,
      userEmail,
      contents{
        type,
        description
      }
    }
  }
`;
const AddtoCollection=gql`
  mutation AddtoCollection($collectionId:String!,$contentId:String!){
    addtoCollection(collectionId:$collectionId,contentId:$contentId){
      collectionName
      userEmail
    }
  }
`
const GetCollection=gql`
  query GetCollections($userEmail:String!) {
    getCollections(userEmail:$userEmail) {
      _id
      collectionName
      contents {
        description
        url
        type
      }
    }
  }

`

const Collection = () => {
  const { user} = useAuth0();  

  const [name,setName]=useState('');
  const [collectionId,setCollectionId]=useState('');
  const [collections,setCollections]=useState([]);

  const [add]=useMutation(AddtoCollection);
  const [create]=useMutation(CreateCollection);
  const {refetch} =useQuery(GetCollection);

  //console.log(data)
  useEffect(()=>{
    FetchCollections();
  },[])
  const createCollection=useCallback(async(e)=>{
    e.preventDefault();  
    try{
            const res=await create({
              variables:{
                collectionName:name,
                userEmail:user?.email
              }
            });
            //console.log(res);
            toast.success("Collection created");
            window.location.reload();
        }
      catch(err){
          console.log(err);
          toast.error("Unable to create ")
        }
  },[name])
  const addtoCollection=async(e)=>{
    e.preventDefault();
    console.log(collectionId,window.location.pathname.split('search/')[1])
    try{
       const res=await add({
        variables:{
          collectionId:collectionId,
          contentId:window.location.pathname.split('search/')[1]
        }
      }) 
      //console.log(res);
      toast.success("Added to collection");
      window.location.reload();
    }
    catch(err){
      console.log(err);
      toast.error("Unable to add ")
    }
  }
  const FetchCollections=async()=>{
    try{
      const res=await refetch({
          userEmail:user?.email
       
      })
      //console.log(res);
      setCollections(await res.data.getCollections);
    }
    catch(err){
      console.log(err)
    }
  }

  return {name,setName,createCollection,addtoCollection,collections,setCollectionId
  }
}

export default Collection