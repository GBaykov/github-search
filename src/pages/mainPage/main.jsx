import './main.css';
import React, { useContext } from 'react';
import User from '../../components/user';
import NoContent from '../../components/nocontent';
import ReposList from '../../components/RepoList';
import { AppContext } from '../../reducer';

export default function MainPage() {
  const { state, dispatch } = useContext(AppContext);
  const content = {
    imageConent: 'pages-img/search.svg',
    text: 'Start with searching a GitHub user',
  };

  const userPage = () => {
    if (!state.user) {
      return <NoContent imageConent={content.imageConent} text={content.text} />;
    } else
      return (
        <section className="user-page">
          <User />
          <ReposList />
        </section>
      );
  };
  return <main className="main">{userPage()}</main>;
}
