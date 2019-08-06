import React, { Component } from 'react';
import styles from './BlogPost.module.css';

class BlogPost extends Component {
    render () {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className={styles.BlogPost}>
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default BlogPost;