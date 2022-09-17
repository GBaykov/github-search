import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react';
import './App.css';
import getUser, { getUserRepos } from './cervices/Api';
import hooks from './hooks';
import Header from './components/header';
import './index.css';
import MainPage from './pages/mainPage/main';
import NoReposPage from './pages/noReposPage';
import NoUserPage from './pages/noUserPage';
import { reducer, defaultState, AppContext } from './reducer';

// export useComponentDidMount;

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  // const [userName, setUserName] = useState('');
  // const [user, setUser] = useState(null);
  // const [repos, setRepos] = useState([]);
  // const [reposLenght, setReposLenght] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isComponentMounted = hooks.useComponentDidMount();

  // const addUserName = (userName) => {
  //   setUserName(userName);
  // };

  const addUser = async (userName) => {
    try {
      const user = await getUser(userName);
      setUser(user);
      setReposLenght(user.repos);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (isComponentMounted) {
      setIsLoading(true);
      // addUser(userName);
      setIsLoading(false);
    }
  }, [state.userName, isComponentMounted]);

  const content = () => {
    if (isError) return <NoUserPage />;
    if (user && reposLenght < 1) return <NoReposPage />;
    // user={user}
    return (
      <MainPage
      // user={user}
      // repos={repos}
      // reposLenght={reposLenght}
      />
    );
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Header />
      {/* addUserName={addUserName} */}
      {content()}
      {/* {isRequest && !user && <NoUserPage />}
      <MainPage isRequest={isRequest} user={user} reposLenght={reposLenght} /> */}
    </AppContext.Provider>
  );
}
export default App;
