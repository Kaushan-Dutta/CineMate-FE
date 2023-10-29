import React from 'react'
import {Routes,Route} from 'react-router-dom';

import Landing from './pages/Home/Landing';
import Gallery from './pages/Content/Gallery';
import Content from './pages/Content/Content';

import Pricing from './pages/Home/Pricing'

import Profile from './pages/User/Profile';
import Downloads from './pages/User/Downloads';
import Favourites from './pages/User/Favourites'
import Collection from './pages/User/Collection';

import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Create from './components/Popups/Create';

import ContentWrapper from './wrapper/ContentWrapper';
import UserWrapper from './wrapper/UserWrapper';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isLoading,user} = useAuth0();  

  return (
    <>
      <NavBar/>
      {user && <Create/>}
      <div className='min-h-screen bg-extra_light font-inter' >
        <Routes>
          <Route path="/" >
              <Route index element={<Landing/>}/>
              <Route path="/pricing" element={<Pricing/>}/>

              <Route path="/search" element={<ContentWrapper/>}>
                  <Route index element={<Gallery/>}/>
                  <Route path=":id" element={<Content/>}/>
              </Route>
              <Route path="/:username" element={<Profile/>}/>
              <Route path="/:username" element={<UserWrapper/>}>
                  <Route path="downloads" element={<Downloads/>}/>
                  <Route path="favourites" element={<Favourites/>}/>
                  <Route path="collection" element={<Collection/>}/>
              </Route>
          </Route>
        </Routes>
      </div>
      {user && <Create/>}
      <Footer/>
    </>
  )
}

export default App