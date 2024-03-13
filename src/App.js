import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/pages/Navbar';
import Home from './assets/pages/Home';
import Sports from './assets/pages/Sports';
import Business from './assets/pages/Business';
import Entertainment from './assets/pages/Entertainment';
import Politics from './assets/pages/Politics';
import Technology from './assets/pages/Technology';
import LatestNews from './assets/pages/LatestNews';
import Article from './assets/pages/Article';
import Error from './assets/pages/Error';
import axios from 'axios';
import './App.css';
import Search from './assets/pages/Search';
import Footer from './assets/pages/Footer';
import Contact from './assets/pages/Contact';
import Counter from './assets/pages/Counter';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeadlineShow />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/article" element={<Article />} />
          <Route path="*" element={<Error />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
const HeadlineShow = () => {
  const [news, setNews] = useState([]);

  console.log(news);

  const category1 = 'general';
  const pageSize = 10;
  const apiKey = '29488292f53b413bb119ca1a5acbc74b';

  const newsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category1}&pageSize=${pageSize}&apiKey=${apiKey}`;

  useEffect(() => {
    axios.get(newsUrl)
      .then(res => {
        setNews(res.data.articles);
      })
      .catch(error => {
        console.log('Failed to fetch news. Please try again later.');
      });
  }
    , [newsUrl]);

  return (
    // <marquee behavior="scroll" direction="left" scrollamount="7" className="headline-news">
    //   {news.map((article, index) => (
    //     <a
    //       href={article.url}
    //       target="_blank"
    //       rel="noreferrer"
    //       className="text-white"
    //       key={index}
    //     >
    //       ○ {article.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //     </a>
    //   ))}

    // </marquee>
    <></>
  )
}

export default App;
