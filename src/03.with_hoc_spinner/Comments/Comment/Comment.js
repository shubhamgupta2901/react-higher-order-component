import React from 'react';
import styles from './Comment.module.css';
import PropTypes from 'prop-types';

const comment = (props) => (
    <article className={styles.Post}>
        <h4>{props.comment.email}</h4>
        <div className={styles.Info}>
            <div className={styles.Author}>{props.comment.body}</div>
        </div>
    </article>
);

comment.propTypes = {
    comment: PropTypes.object,
}

comment.defaultProps = {
    comment:{
        email: '',
        body: '',
    }
}

export default comment;