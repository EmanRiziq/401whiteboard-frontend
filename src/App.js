import './App.css';
import Post from './components/Post';
import Signin from './components/Signin';
import Signup from './components/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Signin />
      <Signup/>
      {/* <Post /> */}
    </div>
  );
}

export default App;
