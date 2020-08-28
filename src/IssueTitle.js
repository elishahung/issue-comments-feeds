import React from 'react';
import { useSelector } from 'react-redux'


const IssueTitle = props => {
  const { issueUrl } = props;
  const issueTitleTable = useSelector(
    state => state.ui.issueTitleTable[issueUrl]
  );
  let issueText = issueUrl.split('/').pop();
  let htmlUrl = '';
  if (issueTitleTable) {
    issueText = issueTitleTable.title;
    htmlUrl = issueTitleTable.url;
  }

  return (
    <a
      href={htmlUrl}
      target='_blank' rel="noopener noreferrer"
      className='issue-title'
    >
      #{issueText}
    </a>
  )
};

export default IssueTitle;
