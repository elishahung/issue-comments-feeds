import React from 'react';
import moment from 'moment';

import IssueTitle from "./IssueTitle";
import { DATE_DISPLAY_THRESHOLD } from "./utility/setting";


const CommentFeed = props => {
  const { comment } = props;

  // moment
  const commentDate = moment(comment.updated_at);
  const toNowDays = (new moment()).diff(commentDate, 'days');
  let commentText;
  if (toNowDays < DATE_DISPLAY_THRESHOLD) {
    commentText = commentDate.fromNow();
  }else{
    commentText = commentDate.format('[on ]D MMM');
  }

  // get issue url
  const issueUrl = 'title' in comment ? comment.url : comment.issue_url;

  return (
    <div className="comment-feed">
      <div className='meta'>
        {/*user photo*/}
        <img src={comment.user.avatar_url} alt='avatar' />
        {/*user name*/}
        <a
          href={comment.user.html_url}
          target='_blank' rel="noopener noreferrer"
          className={'username'}
        >
          {comment.user.login}
        </a>
        {/*comment date*/}
        <span className='commented'>&nbsp;commented</span>
        <span className='date'>&nbsp;{commentText}</span>
        <IssueTitle issueUrl={issueUrl} />
      </div>
      <div className='markdown-body' dangerouslySetInnerHTML={{__html: comment.body}} />
    </div>
  )
};

export default CommentFeed;