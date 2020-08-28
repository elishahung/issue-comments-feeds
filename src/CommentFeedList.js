import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller';

import { fetchComments } from './redux/creators'
import CommentFeed from './CommentFeed';


const CommentFeedList = () => {
  const issues = useSelector(state => state.issues);
  const comments = useSelector(state => state.comments);
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();

  let feedList = []
  if (comments.length > 0) {
    const filteredIssues = issues.filter(
      issue => issue.moment >= comments[comments.length - 1].moment
    );
    feedList = comments.concat(filteredIssues).sort(
      (a, b) => b.moment - a.moment
    );
  }

  return (
    <InfiniteScroll
      className='comment-feed-list'
      pageStart={0}
      loadMore={() => dispatch(fetchComments())}
      hasMore={!ui.isFetching && ui.page !== -1}
      threshold={1024}
      useWindow={true}
    >
      {feedList.map(comment => {
        return (
          <CommentFeed key={comment.id} comment={comment}/>
        )
      })}
    </InfiniteScroll>
  )
};

export default CommentFeedList;