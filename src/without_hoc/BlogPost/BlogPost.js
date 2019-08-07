import React, { Component } from 'react';
import styles from './BlogPost.module.css';
import DataSource from '../../data/DataSource'

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
        const blogPost = await DataSource.getBlogPost(1);
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

export default BlogPost;