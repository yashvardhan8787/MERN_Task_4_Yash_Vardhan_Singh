import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data';  // Importing the blog post 
import "./styles/Post.css"

function Post() {
  const { id } = useParams();
  const post = data.posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div className='post-container'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div>
        <strong>Tags:</strong> {post.tags.join(', ')}
      </div>
      <div>
        <strong>Views:</strong> {post.views} | <strong>Likes:</strong> {post.reactions.likes} | <strong>Dislikes:</strong> {post.reactions.dislikes}
      </div>
    </div>
  );
}

export default Post;
