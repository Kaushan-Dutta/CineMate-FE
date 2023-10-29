import React from 'react';
import { MdWidgets } from 'react-icons/md';
import SearchBar from '../components/SearchBar';
import Filter from '../pages/Content/Filter';
import { Outlet } from 'react-router-dom';

const ContentWrapper = () => {
    return (
        <>
        <div className='pt-[75px]'>
            
            <div className=' py-5 px-[7vw]  border '>
                <SearchBar />
            </div>
            
            <Outlet/>
                
        </div>
        <div className='fixed top-0 z-40'>
                <Filter />
        </div>
        </>
    )
}
export default ContentWrapper