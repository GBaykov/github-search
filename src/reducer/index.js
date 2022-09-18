import React from 'react';

export const defaultState = {
  repos: [],
  user: null,
  userName: '',
  reposLenght: 0,
  currentPage: 1,
};

export const ACTIONS = {
  setUserName: 'setUserName',
  setUser: 'setUser',
  setRepos: 'setRepos',
  setCurrentPage: 'setCurrentPage',
  setReposLenght: 'setReposLenght',
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.setUserName:
      return { ...state, userName: action.payload.userName };
    case ACTIONS.setUser:
      return { ...state, user: action.payload.user };
    case ACTIONS.setRepos:
      return { ...state, repos: action.payload.repos };
    case ACTIONS.setCurrentPage:
      return { ...state, currentPage: action.payload.currentPage };
    case ACTIONS.setReposLenght:
      return { ...state, reposLenght: action.payload.reposLenght };
    default:
      return initialState;
  }
}

export const AppContext = React.createContext();
