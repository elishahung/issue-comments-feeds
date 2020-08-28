import moment from 'moment';

import { ui, comments, issues } from './core';
import { fetchGithub, renderMarkdown } from "../utility/tools";
import { AUTO_LOAD_PER_PAGE} from "../utility/setting";


export const applyRepo = () => {
  return (dispatch) => {
    const params = new URLSearchParams(window.location.search);
    const repo = params.get('repo');

    if (!repo) return;

    window.history.replaceState(null, null,
      window.location.pathname + repo
    );

    dispatch(ui.actions.applyRepo(repo));
  };
};


export const fetchIssues = page => {
  return (dispatch, getState) => {
    const repo = getState().ui.repo;

    let fetchedIssues = undefined;
    return fetchGithub(`/repos/${repo}/issues`, {
      state: 'all',
      per_page: 100,
      page: page
    }).then(resp => {
      if (resp.status === 200) {
        return resp.json();
      }
      resp.text().then(
        text => dispatch(ui.actions.triggerError(text))
      )
    }).then(data => {
      if (!data) return;
      if (data.length === 0) return;
      fetchedIssues = data;

      // title table
      const newIssueTitleTable = data.reduce((issueTable, issue) => {
        issueTable[issue.url] = {
          title: issue.title,
          url: issue.html_url
        };
        return issueTable;
      }, {});
      dispatch(ui.actions.addIssueTitleTable(newIssueTitleTable));

      // render markdown
      const text = fetchedIssues.map(issue => issue.body);
      return renderMarkdown(text, repo);
    }).then(markdownText => {
      if (markdownText) {
        // apply markdown to comment body
        fetchedIssues.forEach((issue, index) => {
          issue.body = markdownText[index];
          issue.moment = moment(issue.created_at).unix();
        });
        dispatch(issues.actions.addIssues(fetchedIssues));
        dispatch(fetchIssues(page + 1));
      }
    });
  }
};

export const fetchComments = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.startFetching());

    const repo = getState().ui.repo;
    const page = getState().ui.page;

    // fetch issues if first time fetching
    if (page === 1) dispatch(fetchIssues(1));

    // fetch comments
    let fetchedComments = undefined;

    return fetchGithub(`/repos/${repo}/issues/comments`, {
      sort: 'updated',
      direction: 'desc',
      per_page: AUTO_LOAD_PER_PAGE,
      page: page
    }).then(resp => {
      if (resp.status === 200) {
        return resp.json();
      }
      resp.text().then(
        text => dispatch(ui.actions.triggerError(text))
      )
    }).then(data => {
      // no comments
      console.log()
      if (!data || data.length === 0) {
        dispatch(ui.actions.finishPage());
        return;
      }

      // render markdown
      dispatch(ui.actions.increPage());

      fetchedComments = data;
      const text = fetchedComments.map(comment => comment.body);
      return renderMarkdown(text, repo);
    }).then(markdownText => {
      if (markdownText) {
        // apply markdown to comment body
        fetchedComments.forEach((comment, index) => {
          comment.body = markdownText[index];
          comment.moment = moment(comment.updated_at).unix();
        });
        dispatch(comments.actions.addComments(fetchedComments));
      }
      dispatch(ui.actions.finishFetching());
    });
  };
};
