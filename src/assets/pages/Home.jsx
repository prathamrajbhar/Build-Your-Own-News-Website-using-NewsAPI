import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Home.css';
import Error from './Error';
function Home() {
  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);
  const [news3, setNews3] = useState([]);
  const [news4, setNews4] = useState([]);
  const [news5, setNews5] = useState([]);
  const [news6, setNews6] = useState([]);
  const [news7, setNews7] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const apiKey = '29488292f53b413bb119ca1a5acbc74b';
  const category1 = 'general';
  const category2 = 'business';
  const category3 = 'politics';
  const category4 = 'sports';
  const category5 = 'entertainment';
  const category6 = 'technology';
  const category7 = 'science';
  const pageSize = 3;

  const newsUrl1 = `https://newsapi.org/v2/top-headlines?country=in&category=${category1}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const newsUrl2 = `https://newsapi.org/v2/top-headlines?country=in&category=${category2}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const newsUrl3 = `https://newsapi.org/v2/top-headlines?country=in&category=${category3}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const newsUrl4 = `https://newsapi.org/v2/top-headlines?country=in&category=${category4}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const newsUrl5 = `https://newsapi.org/v2/top-headlines?country=in&category=${category5}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const newsUrl6 = `https://newsapi.org/v2/top-headlines?country=in&category=${category6}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const newsUrl7 = `https://newsapi.org/v2/top-headlines?country=in&category=${category7}&pageSize=${pageSize}&apiKey=${apiKey}`;

  // const newsUrl1 = `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;
  // const newsUrl2 = `https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`;
  // const newsUrl3 = `https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`;
  // const newsUrl4 = `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`;
  // const newsUrl5 = `https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json`;
  // const newsUrl6 = `https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`;
  // const newsUrl7 = `https://saurav.tech/NewsAPI/top-headlines/category/science/in.json`;


  useEffect(() => {
    axios.all([
      axios.get(newsUrl1),
      axios.get(newsUrl2),
      axios.get(newsUrl3),
      axios.get(newsUrl4),
      axios.get(newsUrl5),
      axios.get(newsUrl6),
      axios.get(newsUrl7)
    ])
      .then(axios.spread((res1, res2, res3, res4, res5, res6, res7) => {
        setNews1(res1.data.articles);
        setNews2(res2.data.articles);
        setNews3(res3.data.articles);
        setNews4(res4.data.articles);
        setNews5(res5.data.articles);
        setNews6(res6.data.articles);
        setNews7(res7.data.articles);
        setLoading(false);
        console.log(res1.data.articles);
      }))
      .catch(error => {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      });
  }, [newsUrl1, newsUrl2, newsUrl3, newsUrl4, newsUrl5, newsUrl6, newsUrl7]);

  if (loading) return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100vw' }} >
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
  if (error) return (
    <Error />
  );

  return (
    <div className="container mt-4">
      <h3 className="mb-3 mt-4">Top Headlines</h3>
      {news1.length > 0 && <News news={news1} />}
      <h3 className="mb-3 mt-4">Business</h3>
      {news2.length > 0 && <News news={news2} />}
      <h3 className="mb-3 mt-4">Politics</h3>
      {news3.length > 0 && <News news={news3} />}
      <h3 className="mb-3 mt-4">Sports</h3>
      {news4.length > 0 && <News news={news4} />}
      <h3 className="mb-3 mt-4">Entertainment</h3>
      {news5.length > 0 && <News news={news5} />}
      <h3 className="mb-3 mt-4">Technology</h3>
      {news6.length > 0 && <News news={news6} />}
      <h3 className="mb-3 mt-4">Science</h3>
      {news7.length > 0 && <News news={news7} />}
    </div>
  );

}

const defaultImage = 'https://www.financialexpress.com/wp-content/uploads/2023/09/Breaking-News-12.jpg';

const News = ({ news }) => (

  <div className="row row-cols-1 row-cols-md-3 g-4">
    {news.map((article, index) => (
      <div className="col" key={index}>
        <div className="card h-100 bg-dark text-white">
          <img
            src={article.urlToImage || defaultImage}
            className="card-img-top h-50"
            alt="article"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description}</p>
            <div className="mt-auto">
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </a>
              <div className="card-footer mt-2 d-flex justify-content-between">
                <small className="text-light">
                  {article.source.name}
                </small>
                <small className="text-light">
                  {new Date(article.publishedAt).toDateString()}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);


export default Home;
