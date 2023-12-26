import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Copyright from './components/Copyright/copyright';
import Contact from './components/Contact/Contact';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Copyright />
        </div>
    );
};

export default App;
