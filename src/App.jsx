import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import getUser, { getUserRepos } from './cervices/Api';
import hooks from './hooks';
import Header from './components/header';
import './index.css';
import MainPage from './pages/mainPage/main';
import NoReposPage from './pages/noReposPage';
import NoUserPage from './pages/noUserPage';

// export useComponentDidMount;

function App() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  // const [repos, setRepos] = useState([]);
  const [reposLenght, setReposLenght] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isComponentMounted = hooks.useComponentDidMount();

  const addUserName = (userName) => {
    setUserName(userName);
  };

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
      addUser(userName);

      // addRepos(userName);
      setIsLoading(false);
    }
  }, [userName, isComponentMounted]);

  const content = () => {
    if (isError) return <NoUserPage />;
    if (user && reposLenght < 1) return <NoReposPage user={user} />;
    return (
      <MainPage
        user={user}
      // repos={repos}
        reposLenght={reposLenght}
      />
    );
  };

  return (
    <>
      <Header addUserName={addUserName} />
      {content()}
      {/* {isRequest && !user && <NoUserPage />}
      <MainPage isRequest={isRequest} user={user} reposLenght={reposLenght} /> */}

    </>
  );
}
export default App;
