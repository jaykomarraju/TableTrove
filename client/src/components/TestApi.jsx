import React, { useEffect, useState } from 'react';

const TestApi = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://calm-scrubland-61926-8fd87bc56428.herokuapp.com/api/test')
            .then(response => response.text())
            .then(data => setMessage(data));
    }, []);

    return (
        <div>
            {message ? <p>{message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default TestApi;