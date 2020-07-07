import React, { useState } from 'react';
import classNames from 'classnames';

import Navbar from '../Navbar';
import Hamburger from '../Hamburger';

import './Header.scss';

function Header() {

    const [active, setActive] = useState(false);

    const handleClickHamburger = () => {
        setActive(!active);
    };

    const handleClickNavbar = () => {
        setActive(!active);
    };

    return (
        <header className="header">
            <Navbar
                onClick={handleClickNavbar}
                className={classNames({ 'open': active })}
            />
            <Hamburger
                className={classNames({ 'open': active})}
                onClick={handleClickHamburger}
            />
        </header>
    );
}

export default Header;