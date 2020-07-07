import React from 'react';

import s from './Share.module.scss';

function Share() {

    return (
        <div className={s.share}>
            <h4 className={s.title}>Let's get social</h4>
            <p className={s.description}>Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin.</p>
        </div>
    );
}

export default Share;