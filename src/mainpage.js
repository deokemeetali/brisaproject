import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Navpage from './navpage';

const MainPages = () => {
  return (
    <div>
     
      <Navbar />
      <div className='sidemainclass'>
        {/* Sidebar component */}
        <div className='side2'>
          <Sidebar />
        </div>

        {/* Outlet for child routes */}
        <div className='side3'>
        <Navpage />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPages;
