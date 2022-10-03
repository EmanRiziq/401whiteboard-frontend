import './App.css';
import Post from './components/Post';
import Signin from './components/Signin';
import Signup from './components/Signup';
import React, { Component } from 'react';
import { When } from 'react-if';
import { useEffect,useContext } from 'react';
import cookies from 'react-cookies';
import AuthContextProvider from './Context/AuthContext';
import { useAuth } from './Context/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { user, autherized, handelSignOut } = useAuth();
  console.log("user", user)
  useEffect(() => {
    if (user.token) {
      autherized = true;
    }
  });

  return (
    <AuthContextProvider>
      <div>
        <When condition={!autherized}>
          <Signin />
          <Signup />
        </When>

        <When condition={autherized}>
          <h3> Hello {user.userName}</h3>
          <button onClick={handelSignOut}> Sign Out </button>
          <Post />
        </When>
      </div>
    </AuthContextProvider>
  );
}

export default App;














