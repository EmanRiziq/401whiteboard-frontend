import './App.css';
import Auth from './components/Auth';
import React, { Component } from 'react';
import AuthContextProvider from './Context/AuthContext';
import PostContextProvider from './Context/PostContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
      <div>
        <Auth />
      </div>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;