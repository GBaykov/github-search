import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import getUser, { getUserRepos } from './cervices/Api';
import Header from './components/header';
import './index.css'
import MainPage from './pages/mainPage/main';
import NoReposPage from './pages/noReposPage';
import NoUserPage from './pages/noUserPage';

function App() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [reposLenght, setReposLenght] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const useComponentDidMount = () => {
    const ref = useRef();
    useEffect(() => {
      ref.current = true;
    }, []);
    return ref.current;
  };
  const isComponentMounted = useComponentDidMount();


  const addUserName = (userName) => {
    setUserName(userName);
  }

  useEffect(() => {
    if (isComponentMounted) {
      setIsLoading(true);
      addUser(userName);

      addRepos(userName);
      setIsLoading(false);
    }

  }, [userName, isComponentMounted]);



  const addUser = async (userName) => {
    try {
      const user = await getUser(userName);
      setUser(user);
      setReposLenght(user.repos)
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  }

  const addRepos = async (userName) => {
    try {
      const repos = await getUserRepos(userName);
      setRepos(repos);
      // setIsError(false);
    } catch (err) {
      setIsError(true);
    }

  }

  const content = () => {
    if (isError) return <NoUserPage />
    if (user && reposLenght < 1) return <NoReposPage user={user} />
    return (<MainPage
      user={user}
      repos={repos}
      reposLenght={reposLenght} />)
  }



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