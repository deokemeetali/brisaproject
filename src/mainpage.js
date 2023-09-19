import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import Admin from './admin';
import Blog from './blog';

const MainPages = () => {
  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
      </section>
      <section>
        <div className='sidemainclass'>
          <div className='side2'>
            <Sidebar />
          </div>
          <div className='side3'>
            <Routes>
            <Route index element={<Blog />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPages;
