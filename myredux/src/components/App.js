import React, { Component } from 'react';
// import Footer from './Footer'
import AddTodo  from '../containers/AddToDo'; 
import VisibleToDoList from '../containers/VisibleToDoList'
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      <div >
        <AddTodo />
        <VisibleToDoList />
        <Footer /> 
      </div>
    );
  }
}

export default App;
