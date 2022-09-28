import './App.css';
import Post from './components/Post';
import Signin from './components/Signin';
import Signup from './components/Signup';
import React, { Component } from 'react';
import { When } from 'react-if';
import cookies from 'react-cookies';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autherized: false,
      test:"testtest",
      userName: ''
    }
  }

  isAutherized = (value) => {
    this.setState({ autherized: value })
  }

  componentDidMount() {
    const token = cookies.load('token');
    this.setState({
      userName: cookies.load('userName')
    })
    if (token) {
      this.setState({
        autherized: true,
        // userName: cookies.load('userName')
      })
    }
  }

  signOut = () => {
    cookies.remove('token')
    cookies.remove('userName')
    cookies.remove("userID");
    this.setState({
      autherized: true
    })
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <When condition={!this.state.autherized}>
          <Signin isAutherized={this.isAutherized} />
          <Signup isAutherized={this.isAutherized} />
        </When>

        <When condition={this.state.autherized}>
          <h3> Hello {this.state.userName}</h3>
          <button onClick={this.signOut}> Sign Out </button>
          <Post />
        </When>
      </div>
    );
  }
}

export default App;