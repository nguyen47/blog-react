import React, { Component } from 'react';
import './App.css';
import Blogs from './components/blogs';

class App extends Component {
  render() {
    return (
      <main className="container" role="main">
        <Blogs />
      </main>
    );
  }
}

export default App;
