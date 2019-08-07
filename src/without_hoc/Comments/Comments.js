import React from 'react';
import PropTypes from 'prop-types'
import Comment from './Comment/Comment';
import styles from './Comments.module.css'
import DataSource from '../../data/DataSource';
class CommentsList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      comments: [],
    }
  }

  async componentDidMount(){
    const comments  = await DataSource.getComments();
    if(comments){
      this.setState({comments});
    }
  }
  
  renderComments(){
    return this.state.comments.slice(0,5).map(comment=> <Comment  comment = {comment}key = {comment.id}/>);
  }

  render(){
    return (
        <div className={styles.Comments}>
            {this.renderComments()}
        </div>
        
    );
  }
}

CommentsList.propTypes ={
}

CommentsList.defaultProps ={
}

export default CommentsList;
