import React from 'react';
import { useParams } from 'react-router-dom';

const SingleArticlePage = () => {
  const { id } = useParams(); 
  return (
    <div>
      <h1>Article {id}</h1>
    </div>
  );
};
export default SingleArticlePage;
