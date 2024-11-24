import { useEffect, useState } from 'react';
import Chatmessage from './chatmessage';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function Chat({ user }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const messagesRef = collection(db, "messages");

    const handleSubmit = async () => {
        const date = new Date();
        await addDoc(messagesRef, {
            text,
            email: user.email,
            logo: user.photoURL,
            name: user.displayName,
            date,
        });
        setText("");
        setTimeout(() => document.querySelector('#copyright').scrollIntoView({ behavior: 'smooth' }), 500);
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(messagesRef, (querySnapshot) => {
            const newMessages = querySnapshot.docs.map((doc) => doc.data()).sort((a, b) => a.date - b.date);
            setMessages(newMessages);
            setTimeout(() => document.querySelector('#copyright').scrollIntoView({ behavior: 'smooth' }), 500);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2 className="text-success text-center">Chat App</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8 col-md-8">
                    <div className="chat-box border p-3 rounded">
                        <div className="messages-container mb-3 chat-message" >
                            {messages.map((message, index) => (
                                <Chatmessage key={index} {...message} user={user} />
                            ))}
                        </div>
                        <div className="input-group">
                            <input
                                className="form-control"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Enter your message"
                            />
                            <button className="btn btn-success ms-3" onClick={handleSubmit}>Send</button>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <small className="text-muted">&copy; Copyright reserved Yuvaraj</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
