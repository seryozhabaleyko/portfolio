import React from 'react';

import Projects from '../../components/Projects';

import './Portfolio.scss';

function Portfolio() {

    return (
        <div className="container">
            <div style={{ height: '100px' }} />
            <div className="portfolio-heading">
                <h1 className="portfolio-title">Portfolio</h1>
            </div>
            <Projects />
            <div style={{ height: '100px' }} />
        </div>
    );
}

export default Portfolio;