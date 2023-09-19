import React from "react";
import {Routes,Route} from "react-router-dom";
import Admin from "./admin";
import Blog from "./blog";

const Navpage=()=>{
    return(
        <>
        <section>
          <div>
          <Routes>
         
         <Route path="/admin" element={<Admin/>}/>  
         <Route path="/blog" element={<Blog/>}/>  
         </Routes> 
          </div>
         
        </section>
        </>
    )
}
export default Navpage;