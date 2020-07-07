import React from 'react';
import classNames from 'classnames';
import { Link, withNavigationContext } from 'react-awesome-slider/dist/navigation';

import './Navbar.scss';

function Navbar({ fullpage, className, onClick }) {

    const { slug } = fullpage.navigation;

    return (
        <nav className={classNames(className)}>
            <Link
                className={slug === '' ? 'selected' : null}
                href="/"
                onClick={onClick}
            >
                About
            </Link>
            <Link
                className={slug === 'portfolio' ? 'selected' : null}
                href="/portfolio"
                onClick={onClick}
            >
                Portfolio
            </Link>
            <Link
                className={slug === 'contact' ? 'selected' : null}
                href="/contact"
                onClick={onClick}
            >
                Contact
            </Link>
        </nav>
    );
}

export default withNavigationContext(Navbar);