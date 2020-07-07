import React, { useState } from 'react';

import s from './Search.module.scss';

function Search({ value = '' }) {

    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipBoard = async (copyMe) => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (error) {
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <input
            type="text" className={s.search}
            defaultValue={value}
            onClick={(event) => copyToClipBoard(event.target.value)}
        />
    );
}

export default Search;