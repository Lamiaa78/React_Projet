
import TitlePage from '../TitlePage';
import React, { useState, useEffect } from 'react';
import PostsGrid from '../UI/PostsGrid';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://freefakeapi.io/api/posts')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <TitlePage title={"Latest News"} />
      <PostsGrid posts={articles} />
    </div>
  );
};

export default NewsPage;

