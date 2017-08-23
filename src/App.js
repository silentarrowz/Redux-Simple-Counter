import React, {Component} from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to Simple Redux Counter</h2>
        </div>
        <p className='App-intro'>
          <button onClick={this.props.increment} >+</button>
          <button onClick={this.props.decrement} >-</button><br/>
        Present Value is {this.props.value}
        </p>
      </div>
    );
  }
}

export default App;
