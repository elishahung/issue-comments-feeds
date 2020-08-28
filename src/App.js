import React from 'react';
import { useSelector } from 'react-redux';

import './App.less';
import CommentFeedList from "./CommentFeedList";

const App = () => {
  const repo = useSelector(state => state.ui.repo)

  const validInput = repo && repo !== 'index.html';

  return (
    <div className="App">
      {validInput ?
        <CommentFeedList />
        :
        <div className='help'>
          Please add <span className='hl'>owner/repo</span> at the end of url.
        </div>
      }
    </div>
  )
};

export default App;