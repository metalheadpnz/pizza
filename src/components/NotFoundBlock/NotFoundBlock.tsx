import React from 'react';
// @ts-ignore
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <h1 className={styles.root}>
            <span>404</span>
            <br/>
            Ничего не найдено :(
        </h1>
    );
};
