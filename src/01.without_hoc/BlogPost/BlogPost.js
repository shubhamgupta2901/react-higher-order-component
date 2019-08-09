import React, { Component } from 'react';
import styles from './BlogPost.module.css';
import DataSource from '../../data/DataSource'
import PropTypes from 'prop-types';

class BlogPost extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            blogPost: {
                title: '',
                body: '',
            },
        }
    }

    async componentDidMount(){
        const blogPost = await DataSource.getBlogPost(this.props.id);
        this.setState({blogPost});
    }


    render () {
        return (
            <div className={styles.BlogPost}>
                <h1>{this.state.blogPost.title}</h1>
                <p>{this.state.blogPost.body}</p>
            </div>

        );
    }
}

BlogPost.propTypes = {
    id: PropTypes.number,
}

BlogPost.defaultProps = {
    id: 1
}

export default BlogPost;