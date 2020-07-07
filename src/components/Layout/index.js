import React from 'react';

import Nav from '../Nav';

import './Layout.scss';

function Layout({ children }) {

    return (
        <>
            <Nav />
            <main>{children}</main>
        </>
    );
};

export default Layout;