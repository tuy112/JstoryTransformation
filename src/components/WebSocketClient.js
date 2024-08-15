import React, { useEffect, useState } from 'react';

const WebSocketClient = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3000/ws');
        ws.onopen = () => console.log('WebSocket is open now.');
        ws.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };
        ws.onerror = (error) => console.error('WebSocket Error: ', error);
        ws.onclose = () => console.log('WebSocket is closed now.');

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (socket) {
            socket.send(input);
            setInput('');
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                <h3>Messages:</h3>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WebSocketClient;