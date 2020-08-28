import React from 'react';
import { useSelector } from 'react-redux';

import './App.less';
import CommentFeedList from "./CommentFeedList";


const HelpMessage = () => (
  <span>Please add <span className='hl'>owner/repo</span> at the end of url.</span>
)

const ErrorMessage = props => (
  <span className='error-message'>
    {props.errors.map(err => <p>{err}</p>)}
  </span>
)


const App = () => {
  const { repo, errorMessage } = useSelector(state => state.ui)

  const validInput = repo && repo !== 'index.html' && errorMessage.length === 0;

  return (
    <div className="App">
      {validInput ?
        <CommentFeedList />
        :
        <div className='message'>
          {errorMessage.length > 0 ? <ErrorMessage errors={errorMessage} /> : <HelpMessage/>}
        </div>
      }
    </div>
  )
};

export default App;