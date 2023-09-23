import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Blog() {
  // const [posts, setPosts] = useState([]);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    let userObj = JSON.parse(sessionStorage.getItem("userDetails"));
    console.log(userObj._id);

    axios.get(`https://blogapp-api-lxve.onrender.com/api/posts?userId=${userObj._id}`)
      .then(response => {
        // setPosts(response.data); 
        setBlogData(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);
  const handleLikeClick = (postId) => {
    console.log(postId);
    axios.post(`https://blogapp-api-lxve.onrender.com/api/posts/${postId}/like`)
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

  );
}

export default Blog;
