import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller';

import { fetchComments } from './redux/creators'
import CommentFeed from './CommentFeed';


const CommentFeedList = () => {
  const comments = useSelector(state => state.comments);
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();

return (
    <InfiniteScroll
      className='comment-feed-list'
      pageStart={0}
      loadMore={() => dispatch(fetchComments())}
      hasMore={!ui.isFetching && ui.page !== -1 && ui.stat !== 'FAIL'}
      threshold={1024}
      useWindow={true}
    >
      {comments.map(comment => {
        return (
          <CommentFeed key={comment.id} comment={comment}/>
        )
      })}
    </InfiniteScroll>
  )
};

export default CommentFeedList;