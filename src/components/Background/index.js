import React from 'react';

import './Background.scss';

function Background({ src, alt = 'background' }) {
    return <img alt={alt} src={src} className="background" />;
};

export default Background;