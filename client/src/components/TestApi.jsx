import React, { useEffect, useState } from 'react';

const TestApi = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/test')
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