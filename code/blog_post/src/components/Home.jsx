import React from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data';  // Importing the blog post data
import './styles/Home.css';

function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body.substring(0, 100)}...</p>  {/* Display brief content */}
              <p>Views: {post.views} | Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
