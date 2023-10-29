import React, { useEffect, useState } from 'react';
import NavbarChild from './NavbarChild';

const Navbar = () => {
   // Empty dependencies array to run the effect only once

  return (
    <div className={`fixed w-full primary-container font-inter text-white nav-fixed z-20 bg-theme shadow-md`}>
      <NavbarChild />
    </div>
  );
};

export default Navbar;
