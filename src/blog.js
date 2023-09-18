import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    axios.get('http://127.0.0.1:4000/api/blogposts')
      .then(response => {
        setPosts(response.data); // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className='blog_css'>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
