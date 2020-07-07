import React from 'react';
import Tilt from 'react-parallax-tilt';

import Social from '../Social';

import { ReactComponent as Mail } from './mail.svg';
import { ReactComponent as Phone } from './phone.svg';
import Iam from './Iam.jpg';

import './Home.scss';

function Home() {

    return (
        <div className="home">
            <div className="home-body">
                <div className="home-hi">
                    <span>Hello I'm</span>
                </div>
                <h2 className="home-title">Sergey Baleyko</h2>
                <h4 className='home-subtitle'>front-end developer</h4>
                <ul className="home-contact">
                    <li>
                        <a href="mailto:seryozha.baleyko@gmail.com">
                            <Mail/>
                            seryozha.baleyko@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+375298131912">
                            <Phone/>
                            +375 29 813 19 12
                        </a>
                    </li>
                </ul>
                <Social/>
            </div>
            <div className="home-image">
                <Tilt tiltReverse={true}>
                    <img src={Iam} alt="lol" className="img-fluid ramka-1"/>
                </Tilt>
            </div>
        </div>
    );
}

export default Home;