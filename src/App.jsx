import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react';
import './App.css';
import getUser, { getUserRepos } from './cervices/Api';
import hooks from './hooks';
import Header from './components/header';
import './index.css';
import MainPage from './pages/mainPage/main';
import NoReposPage from './pages/noReposPage';
import NoUserPage from './pages/noUserPage';
import { reducer, defaultState, AppContext, ACTIONS } from './reducer';
import Spinner from './components/spinner/spinner';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isComponentMounted = hooks.useComponentDidMount();

  const addUser = async (userName) => {
    try {
      const user = await getUser(userName);
      dispatch({
        type: ACTIONS.setUser,
        payload: { user },
      });
      // setReposLenght(user.repos);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (isComponentMounted) {
      setIsLoading(true);
      addUser(state.userName);
      setIsLoading(false);
    }
  }, [state.userName, isComponentMounted]);

  const content = () => {
    if (isLoading) return <Spinner />;
    if (isError) return <NoUserPage />;
    if (state.user && state.reposLenght < 1) return <NoReposPage user={state.user} />;
    return <MainPage />;
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Header />
      {content()}
    </AppContext.Provider>
  );
}
export default App;
