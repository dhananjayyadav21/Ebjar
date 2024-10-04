import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newall from './components/Newall';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Newall pageSize={20} />
      </div>
    )
  }
}

