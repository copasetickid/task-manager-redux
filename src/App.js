import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask, editTask } from './actions'
import TasksPage from './components/TasksPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onCreateTask = ({ title, description}) => {
    this.props.dispatch(createTask({title, description}));
  }

  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={this.props.tasks} onCreateTask={this.onCreateTask}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
