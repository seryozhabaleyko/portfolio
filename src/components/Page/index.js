import React from 'react';

import './Page.scss';

function Page({ children }) {
    return <div className="page">{children}</div>;
};

export default Page;