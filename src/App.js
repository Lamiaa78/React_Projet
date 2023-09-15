import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';
import NewsPage from './components/pages/NewsPage';
import ContactPage from './components/pages/ContactPage';
import SingleArticlePage from './components/pages/SingleArticlePage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news/:id" component={SingleArticlePage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
