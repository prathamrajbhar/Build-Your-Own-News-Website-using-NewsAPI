import React from 'react'

function Error() {
    // const [error, setError] = useState(null);
    return (
        <div className="jumbotron jumbotron-fluid bg-danger text-white text-center">
            <div className="container">
                <h1 className="display-4">Error</h1>
                <p className="lead">Failed to fetch news. Please try again later.</p>
            </div>
        </div>
    )
}

export default Error