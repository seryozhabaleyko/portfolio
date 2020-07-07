import React from 'react';
import Tilt from 'react-parallax-tilt';

import Button from '../Button';

import s from './About.module.scss';
import ab from './ab-img.png';

function About() {

    return (
        <div className={s.about}>
            <div className={s.image}>
                <Tilt tiltReverse={true} scale={1.2}>
                    <img src={ab} alt="lol" className="img-fluid"/>
                </Tilt>
            </div>
            <div className={s.body}>
                <h2 className={s.title}>About Me</h2>
                <p className={s.description}>Hello, I’m a Sergey, front-end developer based on Minsk. I have rich experience
                    in web site design & building and customization. Also I am good at</p>
                <ul className={s.tags}>
                    <li>
                        <span>html</span>
                    </li>
                    <li>
                        <span>css</span>
                    </li>
                    <li>
                        <span>JavaScript</span>
                    </li>
                    <li>
                        <span>React</span>
                    </li>
                    <li>
                        <span>Redux</span>
                    </li>
                </ul>
                <Button className="success">Downlaod CV</Button>
            </div>
        </div>
    );
}

export default About;