import TitlePage from '../TitlePage';
import React, { useState, useEffect } from 'react';
import PostsGrid from '../UI/PostsGrid';

const HomePage = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch('https://freefakeapi.io/api/posts');
        const data = await response.json();
        setLatestPosts(data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching latest posts:', error);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div>
      <TitlePage title={"Latest Posts"} />
      <PostsGrid posts={latestPosts} />
    </div>
  );
}

export default HomePage;
