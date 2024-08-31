import React, { useState } from 'react';
import Child from './child';

const Parent = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div>
            <h1>Message from Child: {message}</h1>
            <Child onMessageChange={handleMessageChange} />
        </div>
    );
};

export default Parent;
