import React from 'react';
import ReactMarkdown from 'react-markdown'
import TimeAgo from 'timeago-react';


const CommentFeed = props => {
  const { comment } = props;
  return (
    <div className="comment-feed">
      <div className='meta'>
        <img src={comment.user.avatar_url} alt='avatar' />
        <a href={comment.user.html_url} target='_blank' className={'username'}>{comment.user.login}</a>
        <span>&nbsp;commented&nbsp;</span>
        <TimeAgo
          datetime={comment.updated_at}
        />
      </div>
      <ReactMarkdown className='markdown' source={comment.body} />
    </div>
  )
};

export default CommentFeed;