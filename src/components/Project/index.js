import React from 'react';
import Tilt from 'react-parallax-tilt';

import Dots from './components/Dots';
import Search from './components/Search';

import './Project.scss';


function Project({ title, thumbnail, demoUrl, codeUrl, tags }) {

    return (
        <Tilt tiltReverse={true}>
            <article className="project">
                <header className="project-topbar">
                    <Dots/>
                    <Search value={demoUrl}/>
                </header>
                <div className="project-thumbnail">
                    <div className="project-details">
                        <div className="project-tags">
                            {tags.map((tag) => (
                                <div className="tag">{tag}</div>
                            ))}
                        </div>
                        <div className="project-actions">
                            <a href={demoUrl} className="btn btn-demo">Demo</a>
                            <a href={codeUrl} className="btn btn-code">Code</a>
                        </div>
                    </div>
                    <img src={thumbnail} alt={title}/>
                    <div className="project-overlay"/>
                </div>
            </article>
        </Tilt>
    );
}

export default Project;