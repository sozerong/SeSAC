import { useState } from 'react';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';

const Home = () => {
    return (
        <div>
            <Chatbot />
            <Navbar />
        </div>
    );
};

export default Home;
