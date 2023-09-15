import React from 'react';
import './style.css';
import PostCard from '../PostCard';

const PostsGrid = ({ posts }) => {
  return (
    <div className="posts-grid">
      {posts.map((post) => (
          <PostCard title={post.title} pic={post.picture} content={post.content} />
      ))}
    </div>
  );
}

export default PostsGrid; 
