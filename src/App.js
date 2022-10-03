import './App.css';
import Post from './components/Post';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Auth from './components/Auth';
import React, { Component } from 'react';
import { When } from 'react-if';
import { useEffect, useContext } from 'react';
import AuthContextProvider from './Context/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Auth />
      </div>
    </AuthContextProvider>
  );
}

export default App;