import React from 'react';

import './Lettering.scss';

function Lettering({ text = [], title = '' }) {

    const renderText = () => {
        return text && text.length
            ? text.map((line, index) => {
                return <p key={`${index}`}>{line}</p>;
            })
            : null;
    };

    return (
        <div className="lettering">
            <h1>{title}</h1>
            {renderText()}
        </div>
    );
};

export default Lettering;