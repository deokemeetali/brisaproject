import React, { useState } from "react";
import axios from "axios";
import './App.css';
function Admin(){
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const handleSubmit=(e)=>{
      
        e.preventDefault();
        const userId = sessionStorage.getItem('userId'); 
        const data = {
            title,
            description,
            author:userId
          };
          
        axios.post('http://127.0.0.1:4000/api/posts',data)
        .then(response=>{
            if(response.status===201){

                alert('Posted Successfully');
                setTitle("");
                setDescription("");
            }else{
                console.log('failed to post')
            }
        })
        .catch(error => { 
        
            console.log('Error posting data:', error);
          });
    }
    return (
        <div className="admin-container">
          <h2>Create a new post</h2>
          <form className="admin-form" onSubmit={handleSubmit}>
            <label>
              Title:
              <br></br>
              <input  className="input-border" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />
            <label>
              Description:
              <textarea className="input-border" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <button type="submit">Post</button>
          </form>
        </div>
      );
      
}
export default Admin;