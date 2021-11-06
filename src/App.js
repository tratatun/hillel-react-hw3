import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userName, setUserName] = useState('');

  const callback = (status, name) => {
    setUserName(name);
    setIsAuthorized(status);
  };

  return (
    <>
      <Header name={userName} />
      <Main>
        <Login callback={callback}/>
        {isAuthorized && <Post author={userName} />}
      </Main>
      <Footer content={<div>Footer content</div>} />
    </>
  );
}

export default App;
