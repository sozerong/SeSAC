import { useState } from 'react';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:8000/api/chatbot/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ text: input }),
        });
        const data = await res.json();
        setMessages([...messages, { text: input, response: data }]);
        setInput('');
    };

    return (
        <div>
            <h1>Chat with AI</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <p>You: {msg.text}</p>
                        <p>AI: {msg.response}</p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
