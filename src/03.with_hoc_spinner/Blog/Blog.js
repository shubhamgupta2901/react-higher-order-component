import React, { Component } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Comments from '../Comments/Comments';

class Blog extends Component {
    render () {
        return (
            <div>
                <Comments/>
            </div>
        );
    }
}

export default Blog;