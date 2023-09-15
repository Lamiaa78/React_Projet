import React from 'react';
import './style.css';

const PostCard = ({ pic, title, content }) => {
  return (
    <div className="post-card">
      <img src={pic} alt="Post" className="post-image" />
      <div className="post-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default PostCard;
