import React from 'react';
import Header1 from './Header1';
import Navbar from './Navbar';
import Header2 from './Header2';

function Header() {
   
  return (
    <div className="w-full ">
      
      <div className="relative z-10">
        <Header1 />
      </div>

      <div className='sticky top-0 left-0 z-50 bg-[#fdfdfd] text-[#001128] shadow-md'>
      <Navbar />
      </div>

     
      <div className="relative z-10">
        <Header2 />
      </div>
    </div>
  );
}

export default Header;
