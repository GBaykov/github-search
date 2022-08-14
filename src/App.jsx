import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import './index.css'
import MainPage from './pages/mainPage/main';
import NoUserPage from './pages/noUserPage';

function App() {
  const [user, setUser] = useState(null);
  const addUser = (userr) => {
    setUser(userr);

  }
  const isUser = () => {
    if (user) {
      return <MainPage user={user} />
    } else {
      return <NoUserPage />;
    }
  }

  return (
    <>
      <Header addUser={addUser} />
      {isUser()}
    </>
  );
}

export default App;
