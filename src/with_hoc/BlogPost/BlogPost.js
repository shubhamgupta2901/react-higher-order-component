import React from 'react';
import styles from './BlogPost.module.css';
import PropTypes from 'prop-types';
import withDataSourceSubscription from '../hoc/withDataSourceSubscription/withDataSourceSubscription';

const blogPost = (props) => {
    let post = <p>Please select a Post!</p>;
    if(props.data){
        post = (
            <div className={styles.BlogPost}>
                <h1>{props.data.title}</h1>
                <p>{props.data.body}</p>
            </div>
        );
    }  
    return post;
}

blogPost.propTypes={
    data: PropTypes.object,
}

blogPost.defaultProps = {
    data: {
        title: 'Title',
        body: 'Body',
    }
}

const BlogPostWithDataSourceSubscription = withDataSourceSubscription(blogPost,(DataSource,props)=>DataSource.getBlogPost(1));
export default BlogPostWithDataSourceSubscription;