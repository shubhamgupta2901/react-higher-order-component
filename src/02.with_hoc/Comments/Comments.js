import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comments.module.css';
import withDataSourceSubscription from '../hoc/withDataSourceSubscription/withDataSourceSubscription';
import Comment from './Comment/Comment';

const comments =(props) => {
  
  if(props.data){
    return(
      <div className={styles.Comments}>
         {props.data.slice(0,5).map(comment=> <Comment  comment = {comment}key = {comment.id}/>)}
      </div>
    )
  }
  return null;
}

comments.propTypes ={
  data: PropTypes.arrayOf(PropTypes.object)
}

comments.defaultProps ={
  data: [],
}

const CommentsWithDataSourceSubscription = withDataSourceSubscription(comments,(DataSource)=> DataSource.getComments());
export default CommentsWithDataSourceSubscription;

