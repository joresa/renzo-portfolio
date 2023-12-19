import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            {/* Other components */}
        </div>
    );
};

export default App;
