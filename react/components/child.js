import React from 'react';

const Child = ({ onMessageChange }) => {
    const sendMessage = () => {
        onMessageChange('Hello from Child!');
    };

    return <button onClick={sendMessage}>Send Message</button>;
};

export default Child;
