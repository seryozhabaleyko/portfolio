import React from 'react';
import classNames from 'classnames';

import './Button.scss';

function Button({ children, type, className }) {

    return (
        <button
            type={classNames({ 'button': !type }, type)}
            className={classNames('button', { 'default': !className }, className)}
        >
            {children}
        </button>
    );
}

export default Button;