import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Feature from '../../Feature/Feature';
import Header from '../../Header/Header';
import Project from '../../Project/Project';
import Skills from '../../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Feature></Feature>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;