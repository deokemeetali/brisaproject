import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Navpage from './navpage';

const MainPages = ({onLogout}) => {
  return (
    <div>
     
      <Navbar onLogout={onLogout} />
      <div className='sidemainclass'>
      
        <div className='side2'>
          <Sidebar />
        </div>

       
        <div className='side3'>
        <Navpage  />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPages;
