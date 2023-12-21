import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Copyright from './components/Copyright/copyright';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Experience />
            <Portfolio />
            <Copyright />
        </div>
    );
};

export default App;
