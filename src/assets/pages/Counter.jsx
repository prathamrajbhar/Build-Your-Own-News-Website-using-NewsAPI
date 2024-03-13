import React, { useEffect } from 'react';

function Counter() {
    // write a code for count means how many times user refresh or visit the page and store in local storage
    useEffect(() => {
        let count = localStorage.getItem('count') || 0;
        localStorage.setItem('count', parseInt(count) + 1);
        console.log('You have visited this page ' + localStorage.getItem('count') + ' times');
    }, []);
    return (
        <div>Counter</div>
    )
}

export default Counter