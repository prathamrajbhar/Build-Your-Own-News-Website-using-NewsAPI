import React from 'react';

function Article(props) {
    const { location } = props;
    const name = location.state && location.state.Name;

    return (
        <div className="container">
            <h1>Article</h1>
            <p>Welcome, {name}!</p>
        </div>
    );
}

export default Article;
