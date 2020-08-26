import React from 'react';
import ReactMarkdown from 'react-markdown'


const CommentFeed = props => {
  const { comment } = props;
  return (
    <div className="comment-feed">
      <ReactMarkdown source={comment.body} />
    </div>
  )
};

export default CommentFeed;