import './App.css';
import Post from './components/Post';
import Signin from './components/Signin';
import Signup from './components/Signup';
import React, { Component } from 'react';
import { When } from 'react-if';


import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autherized: false
    }
  }

  isAutherized = (value) => {
    console.log(this.state.autherized)
    this.setState({ autherized: value })
    console.log(this.state.autherized)

  }

  render() {
    return (
      <div>
        <When condition={!this.state.autherized}>
          <Signin isAutherized={this.isAutherized} />
          <Signup isAutherized={this.isAutherized} />
        </When>

        <When condition={this.state.autherized}>
          <Post />
        </When>
      </div>
    );
  }
}

export default App;