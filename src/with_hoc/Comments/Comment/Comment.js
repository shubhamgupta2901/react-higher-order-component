import React from 'react';
import styles from './Comment.module.css';

const comment = (props) => (
    <article className={styles.Post}>
        <h1>Title</h1>
        <div className={styles.Info}>
            <div className={styles.Author}>Author</div>
        </div>
    </article>
);

export default comment;