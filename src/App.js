import './App.css';
import Auth from './components/Auth';
import React, { Component } from 'react';
import AuthContextProvider from './Context/AuthContext';
import PostContextProvider from './Context/PostContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <div>
          <Router>
            <Routes>
              <Route
                exact path="/Signup"
                element={<Signup />}           >
              </Route>
              <Route
                exact path="/"
                element={<Auth />}           >
              </Route>
            </Routes>
          </Router>

        </div>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;