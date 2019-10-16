import React, { Component } from 'react';
// import Budjet from './components/budjet';
import Routing from './components/routing';

import './App.css';
// import ComponentA from './components/functionalComponenet';
// import Routing2 from './components/routing2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing />
        {/* <ComponentA /> */}
        {/* <Routing2 /> */}
      </div>
    );
  }
}
export default App;
