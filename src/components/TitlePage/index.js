import React from 'react';
import './style.css';

const TitlePage = ({ title }) => {
  return (
    <div className="title-page">
      <h1 className="title">{title}</h1>
    </div>
  );
}

export default TitlePage;
