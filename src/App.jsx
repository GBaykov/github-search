import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import getUser from './cervices/Api';
import Header from './components/header';
import './index.css'
import MainPage from './pages/mainPage/main';
import NoReposPage from './pages/noReposPage';
import NoUserPage from './pages/noUserPage';

// 1. переделать логику запроса и поиска.Серчбар должен только искать и передавать имя вверх
// а не сам осуществлят ьпоиск по API. 
// 2. реализовать алтернативный выбор страницы(если первая страница - дефолт,
//   если получены полные данные, то обновить ее; 
//   если есть юзер но нет репос, то отобажать другую;
//   если ошибка - страница без юзера)
// 2-2. допилить отображение осноынх жлементов
// 3. добавить минимальные(или полные) стили и дальше добавить пэгинацию
// 4. закончить стили, рефакторинг, реализация остальных мелких фич
// !!!5. ДОП - переписать на ТС и(или) Редакс

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
      searchUser(userName);
      setIsLoading(false);
    }

  }, [userName, isComponentMounted]);



  const searchUser = async (userName) => {
    try {
      const user = await getUser(userName);
      setUser(user);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  }

  const addRepos = (repos) => {
    setRepos(repos);
  }

  const conent = () => {
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
      {conent()}
      {/* {isRequest && !user && <NoUserPage />}
      <MainPage isRequest={isRequest} user={user} reposLenght={reposLenght} /> */}

    </>
  );
}
export default App;