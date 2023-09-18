import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './home.css';

function Home() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [showBlog, setShowBlog] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const userId = sessionStorage.getItem('userId');
  

  useEffect(() => {
    if (showBlog) {
      
      axios.get(`http://127.0.0.1:4000/api/posts?userId=${userId}`)
        .then(response => {
          setBlogData(response.data);
        })
        .catch(error => {
          console.error('Error fetching blog data:', error);
        });
    }
  }, [showBlog]);

  const handleAdminClick = () => {
    navigate('/admin');
  };

  const handleBlogClick = () => {
    setShowBlog(true); 
  };
  const handleLikeClick = (postId) => {
    console.log(postId);
    axios.post(`http://127.0.0.1:4000/api/posts/${postId}/like`)
      .then((response) => {
        
        console.log('Like updated successfully', response);
        
       
        const updatedLikesCount = response.data.likes;
        
        const updatedBlogData = blogData.map((post) => {
          if (post._id === postId) {
            post.likes = updatedLikesCount;
          }
          return post;
        });
  
        setBlogData(updatedBlogData);
      })
      .catch((error) => {
        console.error('Error updating like:', error);
      });
  };
  
  

  return (
    <div >
      <div className='home-container'>
      <nav className='head'>
        
        <h2 className='home-heading-style'> Welcome, {username}!</h2>
        <button  className="button-css">Logout</button>
       
        </nav>
        
        </div> 
        <div className='container'>
        <div className='sidebar'>
        <button  className="button-css" onClick={handleAdminClick}>Admin</button>
        
        <button className="button-css" onClick={handleBlogClick}>Blog</button>
       
        </div>
        
        
        <br></br>
      

      {showBlog && (
        <div className='blog-content'>
          <h2 className='heading_blog'>Blog Post</h2>
         
          {blogData.map((post, index) => (
            <div key={index} className='blog-post'>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button className='like-button' onClick={() => handleLikeClick(post._id)}>
          <FontAwesomeIcon icon={faHeart} color={post.likes > 0 ? 'red' : 'gray'} /> {post.likes}
        </button>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default Home;
