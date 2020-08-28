import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchComments } from './redux/creators'
import CommentFeed from './CommentFeed';
import { AUTO_LOAD_TRIGGER_HEIGHT } from "./utility/setting";


const CommentFeedList = () => {
  const { issues, comments, ui } = useSelector(state => state);
  const dispatch = useDispatch();

  // feeds management
  let feedList = []
  if (comments.length > 0) {
    let filteredIssues = issues;
    // hide issue which not in comments date range
    if (ui.page !== -1) {
      filteredIssues = issues.filter(
        issue => issue.moment >= comments[comments.length - 1].moment
      );
    }
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
      threshold={AUTO_LOAD_TRIGGER_HEIGHT}
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