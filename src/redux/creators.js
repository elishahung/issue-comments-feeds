import { ui, comments } from './core';
import base64 from 'base-64';
import { authToken } from '../setting'


export const fetchComments = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.startFetching());

    const repo = getState().ui.repo;
    const page = getState().ui.page;

    const params = {
      sort: 'updated',
      direction: 'desc',
      per_page: 10,
      page: page
    }
    let headers = new Headers();
    if (process.env.NODE_ENV !== 'production') {
      headers.set(
        'Authorization',
        'Basic ' + base64.encode(authToken)
      );
    }

    const request_url =
      `https://api.github.com/repos/${repo}/issues/comments?` +
      `sort=${params.sort}&` +
      `direction=${params.direction}&` +
      `per_page=${params.per_page}&` +
      `page=${params.page}`;

    fetch(request_url, {headers: headers}).then(resp => {
      if (resp.status === 200) {
        dispatch(ui.actions.updateStat('DONE'));
        return resp.json();
      }else{
        dispatch(ui.actions.updateStat('FAIL'));
        return false;
      }
    }).then(data => {
      if (!data) {
        return
      }
      if (data.length === 0) {
        dispatch(ui.actions.finishPage())
        return;
      }
      dispatch(ui.actions.increPage());
      dispatch(comments.actions.addComments(data));
    }).then(() => {
      dispatch(ui.actions.finishFetching());
    });
  };
};
