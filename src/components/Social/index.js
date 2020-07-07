import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as GitHub } from './github.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import { ReactComponent as Vk } from './vk.svg';
import { ReactComponent as Twitter } from './twitter.svg';

import './Social.scss';

function Social() {

    return (
        <div className="social">
            <Link to="/" className="GitHub">
                <GitHub/>
            </Link>
            <Link to="/" className="LinkedIn">
                <LinkedIn/>
            </Link>
            <Link to="/" className="vk">
                <Vk/>
            </Link>
            <Link to="/" className="Twitter">
                <Twitter/>
            </Link>
        </div>
    );
}

export default Social;