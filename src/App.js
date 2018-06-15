import React, { Component } from 'react';
import Content from './content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="box-center">
        <div className="box1">
          <input type="text"  placeholder="search here"/>
          <button class="bg-primary ">Search</button>
        </div>
        <div>
          <Content/>
        </div>
      </div>
    );
  }
}

export default App;
