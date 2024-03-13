import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';

function Politics() {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultImage = 'https://www.financialexpress.com/wp-content/uploads/2023/09/Breaking-News-12.jpg';
  const apiKey = '29488292f53b413bb119ca1a5acbc74b';
  const category = 'politics';
  const pageSize = 100;
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
  console.log(newsUrl);
  useEffect(() => {
    axios.get(newsUrl)
      .then(res => {
        setSports(res.data.articles);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch sports news. Please try again later.');
        setLoading(false);
      });
  }, [newsUrl]);
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
    <div className="container mt-3">
      <div className="container">
        <div className="h-25 mb-4 bg-dark rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold text-center">Politics</h1>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {sports.map((article, index) => (
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
    </div>
  );
}

export default Politics;
