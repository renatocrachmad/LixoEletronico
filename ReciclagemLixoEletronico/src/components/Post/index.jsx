import React from 'react';
import './style.css';

const Post = ({ title, content, image }) => {
  return (
    <div className="post-container">
      {image && <img src={image} alt={title} className="post-image" />}
      <h3 className="post-title">{title}</h3>
      <p className="post-content">{content}</p>
    </div>
  );
};

export default Post;
