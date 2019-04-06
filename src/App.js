import React, { Component } from 'react';
import Task from './components/Task';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Task />
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(App);
