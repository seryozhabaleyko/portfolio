import React from 'react';

import s from './Dots.module.scss';

function Dots() {

    return (
        <div className={s.dots}>
            <span className={s.dot} style={{ background: '#ED594A' }}></span>
            <span className={s.dot} style={{ background: '#FDD800' }}></span>
            <span className={s.dot} style={{ background: '#5AC05A' }}></span>
        </div>
    )
}

export default Dots;