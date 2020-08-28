import { createSlice } from '@reduxjs/toolkit';


export const issues = createSlice({
  name: 'issues',
  initialState: [],
  reducers: {
    addIssues: (state, action) => {
      return [...state, ...action.payload];
    }
  }
});

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
    errorMessage: [],
    repo: undefined,
    page: 1,
    isFetching: false,
    issueTitleTable: {}
  },
  reducers: {
    applyRepo: (state, action) => {state.repo = action.payload},
    increPage: state => {state.page = state.page + 1},
    finishPage: state => {state.page = -1},
    startFetching: state => {state.isFetching = true},
    finishFetching: state => {state.isFetching = false},
    addIssueTitleTable: (state, action) => {
      state.issueTitleTable = {...state, ...action.payload};
    },
    triggerError: (state, action) => {
      state.errorMessage = [...state.errorMessage, action.payload];
    }
  }
});


export const rootReducer = {
  ui: ui.reducer,
  comments: comments.reducer,
  issues: issues.reducer
};