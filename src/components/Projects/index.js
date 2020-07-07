import React, { useState } from 'react';
import classNames from 'classnames';

import Project from '../Project';

import kanban from './kanban.jpg';
import medium from './medium.jpg';
import country from './country.jpg';
import belhard from './belhard.jpg';
import repairs from './repairs.jpg';
import ripple from './ripple.jpg';
import searchGitHub from './githubSearch1.jpg';
import typingSpeed from './typing-speed.png';
import pianino from './pianino.jpg';
import tennis from './tennis.jpg';
import clock from './clock.jpg';
import portfolio from './portfolio.jpg';

import './Projects.scss';

const data = [
    {
        id: 12,
        title: 'Portfolio',
        thumbnail: portfolio,
        demoUrl: 'https://seryozhabaleyko.github.io',
        codeUrl: 'https://github.com/seryozhabaleyko/seryozhabaleyko.github.io',
        tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
        id: 1,
        title: 'RealWorld [Medium clone]',
        thumbnail: medium,
        demoUrl: 'https://react-redux.realworld.io',
        codeUrl: 'https://github.com/seryozhabaleyko/medium',
        tags: ['CSS', 'HTML', 'JavaScript', 'React', 'Redux'],
    },
    {
        id: 2,
        title: 'Kanban [Trello clone]',
        thumbnail: kanban,
        demoUrl: 'https://kanban-it-academy.web.app',
        codeUrl: 'https://github.com/seryozhabaleyko/kanban',
        tags: ['CSS', 'HTML', 'JavaScript', 'Firebase'],
    },
    {
        id: 3,
        title: 'Country information [REST Countries]',
        thumbnail: country,
        demoUrl: 'https://seryozhabaleyko.github.io/country-information',
        codeUrl: 'https://github.com/seryozhabaleyko/country-information',
        tags: ['CSS', 'HTML', 'JavaScript', 'React', 'Redux'],
    },
    {
        id: 4,
        title: 'User search application [GitHub API]',
        thumbnail: searchGitHub,
        demoUrl: 'https://seryozhabaleyko.github.io/user-search-application',
        codeUrl: 'https://github.com/seryozhabaleyko/user-search-application',
        tags: ['CSS', 'HTML', 'JavaScript', 'React', 'Redux'],
    },
    {
        id: 5,
        title: 'Test task by Belhard',
        thumbnail: belhard,
        demoUrl: 'https://seryozhabaleyko.github.io/test-task-by-belhard/dist',
        codeUrl: 'https://github.com/seryozhabaleyko/test-task-by-belhard',
        tags: ['CSS', 'HTML', 'SCSS', 'Webpack'],
    },
    {
        id: 6,
        title: 'Техпомощь',
        thumbnail: repairs,
        demoUrl: 'https://seryozhabaleyko.github.io/repairs',
        codeUrl: 'https://github.com/seryozhabaleyko/repairs',
        tags: ['CSS', 'HTML'],
    },
    {
        id: 7,
        title: 'button ripple effect',
        thumbnail: ripple,
        demoUrl: 'https://github.com/seryozhabaleyko/button-ripple-effect',
        codeUrl: 'https://github.com/seryozhabaleyko/button-ripple-effect',
        tags: ['CSS', 'JavaScript'],
    },
    {
        id: 8,
        title: 'Pianino',
        thumbnail: pianino,
        demoUrl: 'https://seryozhabaleyko.github.io/pianino-js',
        codeUrl: 'https://github.com/seryozhabaleyko/pianino-js',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 9,
        title: 'Speed typing game in JavaScript',
        thumbnail: typingSpeed,
        demoUrl: 'https://seryozhabaleyko.github.io/speed-typing-game/index.html',
        codeUrl: 'https://github.com/seryozhabaleyko/speed-typing-game',
        tags: ['HTML', 'JavaScript'],
    },
    {
        id: 10,
        title: 'Tennis',
        thumbnail: tennis,
        demoUrl: 'https://seryozhabaleyko.github.io/homework/Tennis',
        codeUrl: 'https://github.com/seryozhabaleyko/homework/tree/master/Tennis',
        tags: ['HTML', 'JavaScript', 'Canvas'],
    },
    {
        id: 11,
        title: 'Clock MVC',
        thumbnail: clock,
        demoUrl: 'https://seryozhabaleyko.github.io/homework/ClockModelViewController/',
        codeUrl: 'https://github.com/seryozhabaleyko/homework/tree/master/ClockModelViewController',
        tags: ['HTML', 'JavaScript', 'Canvas'],
    },
];

const tabs = ['Show All', 'CSS', 'HTML', 'JavaScript', 'React', 'Redux', 'Firebase'];

function Projects() {

    const [active, setActive] = useState(tabs[0]);
    const isShowAll = active === tabs[0];
    const works = isShowAll
        ? data
        : data.filter((work) => work.tags.includes(active));

    return (
        <>
            <div className="filters">
                <div className="tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={classNames('tab', { 'active': active === tab })}
                            onClick={() => setActive(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {isShowAll ? (
                    <small>Showing all projects. Use the filter to list them by skill or technology.</small>
                ) : (
                    <small>Showing <strong>{works.length}</strong> projects filtered by <strong>{active}</strong>.</small>
                )}
            </div>
            <div className="projects">
                {works.map((work) => (
                    <Project key={work.id} {...work} />
                ))}
            </div>
        </>
    );
}

export default Projects;