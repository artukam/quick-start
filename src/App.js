import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <h1 >React Quick Start Template</h1>
        </header>
        <p>
          This is a React Quick Start Template using default webpack and babel settings from the September 2017 build of create-react-app.
        </p>
        <p>
          A few things to note:
          <ul>
            <li>styling by default uses the Bootstrap framework;</li>
            <li>Redux has been incorporate into this build.</li>
          </ul>
        </p>
        <p>
          Please ensure that the code is thoroughly reviewed before anything is built for production.
        </p>
        <p>
          - Arthur
        </p>
      </div>
    );
  }
}

export default App;
