import React, { Component } from 'react';
import TasksPage from './components/TasksPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={mockTasks}/>
      </div>
    );
  }
}

export default App;
