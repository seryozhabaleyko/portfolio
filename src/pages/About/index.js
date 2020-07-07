import React from 'react';

import Page from '../../components/Page';
import Section from '../../components/Section';
import Mouse from '../../components/Mouse';
import Lettering from '../../components/Lettering';
import Content from '../../components/Content';

import Home from '../../components/Home';
import AboutMe from '../../components/About';

import './About.scss';

function About() {

    return (
        <Page>
            <Section wrapper={false} backgroundColor="#100e17">
                <Content
                    main={
                        <div className="container">
                            <Home/>
                        </div>
                    }
                    action={<Mouse/>}
                />
            </Section>
            <Section wrapper={false} backgroundColor="#100e17">
                <Content
                    main={
                        <div className="container">
                            <AboutMe/>
                        </div>
                    }
                />
            </Section>
        </Page>
    );
}

export default About;