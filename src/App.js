import './App.css';
import React, { Component} from 'react' 
import Parent from './component/Parent';
class App extends Component {
render() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
        <Parent /> 
    </div>
  );
}
}

export default App;
