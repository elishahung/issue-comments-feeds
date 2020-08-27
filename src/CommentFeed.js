import React from 'react';
import ReactMarkdown from 'react-markdown'
import moment from 'moment';


const CommentFeed = props => {
  const { comment } = props;

  // moment
  const commentDate = moment(comment.updated_at);
  const now = new moment();
  const toNowDays = now.diff(commentDate, 'days');


  return (
    <div className="comment-feed">
      <div className='meta'>
        <img src={comment.user.avatar_url} alt='avatar' />
        <a href={comment.user.html_url} target='_blank' rel="noopener noreferrer" className={'username'}>{comment.user.login}</a>
        <span>&nbsp;commented&nbsp;</span>
        <span className='date'>{toNowDays < 3 ? commentDate.fromNow() : commentDate.format('[on ]D MMM')}</span>
      </div>
      <ReactMarkdown className='markdown-body' source={comment.body} />
    </div>
  )
};

export default CommentFeed;