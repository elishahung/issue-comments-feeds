import { createSlice } from '@reduxjs/toolkit';


export const comments = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    addComments: (state, action) => {
      return [...state, ...action.payload];
    }
  }
});


export const ui = createSlice({
  name: 'ui',
  initialState: {
    stat: 'WAIT', // WAIT, FETCH, FAIL, DONE
    repo: 'moonshinevfx/4drec',
    page: 1,
    isFetching: false
  },
  reducers: {
    updateStat: (state, action) => {state.stat = action.payload},
    increPage: state => {state.page = state.page + 1},
    finishPage: state => {state.page = -1},
    startFetching: state => {state.isFetching = true},
    finishFetching: state => {state.isFetching = false}
  }
});


export const rootReducer = {
  ui: ui.reducer,
  comments: comments.reducer
};