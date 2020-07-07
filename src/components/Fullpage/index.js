import React, { useRef } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import { withNavigationContext, withNavigationHandlers } from 'react-awesome-slider/dist/navigation';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

import Startup from '../Startup';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';

const Slider = withNavigationHandlers(AwesomeSlider);

function Fullpage({ fullpage }) {

    const isFirstLoad = useRef(true);

    return (
        <Slider
            startupScreen={<Startup/>}
            startupDelay={1000}
            buttons={true}
            animation="foldOutAnimation"
            cssModule={[CoreStyles, AnimationStyles]}
            onTransitionEnd={() => {
                if (isFirstLoad.current === true) {
                    document.querySelector('body').classList.add('animated');
                    document.querySelector('body').classList.add('visible');
                }
            }}
            media={[
                {
                    slug: '',
                    className: 'slide about',
                    children: <About/>,
                },
                {
                    slug: 'portfolio',
                    className: 'slide portfolio',
                    children: <Portfolio/>,
                },
                {
                    slug: 'contact',
                    className: 'slide contact',
                    children: <Contact/>,
                },
            ]}
        />
    );
}

export default withNavigationContext(Fullpage);