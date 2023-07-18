import './App.css';
import React, { Component} from 'react' 
// import Parent from './component/Parent';
import Count from './component/Count'
class App extends Component {
render() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <Count />
        {/* <Parent />  */}
    </div>
  );
}
}

export default App;
