// Label.js
import React from 'react';
import style from './Label.module.css';

const Label = ({ htmlFor, children }) => {
    return (
        <label className={style.label} htmlFor={htmlFor}>
            {children}
        </label>
    );
};

export default Label;
