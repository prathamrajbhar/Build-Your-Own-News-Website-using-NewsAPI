import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
    const categories = [
        'general',
        'business',
        'politics',
        'sports',
        'entertainment',
        'technology',
        'science'
    ];
    const pageSize = 100;
    const apiKey = '29488292f53b413bb119ca1a5acbc74b';
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const requests = categories.map(category => (
                    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`)
                ));
                const responses = await Promise.all(requests);
                const newsData = responses.map(response => response.data.articles).flat();
                setNews(newsData);
            } catch (error) {
                console.log('Failed to fetch news. Please try again later.');
            }
        };

        fetchNews();
    }, [news, query]);

    const filteredNews = news.filter(article => (
        article.title.toLowerCase().includes(query.toLowerCase())
    ));

    return (
        <div className="container mt-3">
            <div className="container mb-4">
                <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={e => setQuery(e.target.value)}
                    />
                </form>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {filteredNews.map((article, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 bg-dark text-white">
                            <img
                                src={article.urlToImage}
                                className="card-img-top h-50"
                                alt="article"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.description}</p>
                                <div className="mt-auto">
                                    <a href={article.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
