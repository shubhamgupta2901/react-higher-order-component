import React from 'react';
import PropTypes from 'prop-types'
import Comment from './Comment/Comment';
import styles from './Comments.module.css'

class CommentsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
        <div className={styles.Comments}>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
        
    );
  }
}

CommentsList.propTypes ={
}

CommentsList.defaultProps ={
}

export default CommentsList;
