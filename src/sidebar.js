import React from 'react';
import { Link } from 'react-router-dom'; 
import "./home.css";


const Sidebar = () => {
    return (
        <>
            <section className='container'>
                <div className='sidebar'>
                            <br></br>
                            <Link to="/admin" className="button-css">Admin</Link>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link to="/blog" className="button-css">Blog</Link>
    
                </div>
            </section>
        </>
    );
}

export default Sidebar;
