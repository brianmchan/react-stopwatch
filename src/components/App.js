import React, { Component } from 'react';
import Stopwatch from './Stopwatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Stopwatch</h1>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
