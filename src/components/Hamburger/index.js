import React from 'react';
import classNames from 'classnames';

import './Hamburger.scss';

function Hamburger({ className, ...rest }) {

    return (
        <div
            {...rest}
            className={classNames('hamburger', className)}
        >
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
        </div>
    );
}

export default Hamburger;