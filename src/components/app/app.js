import React, { Component } from 'react';


import SearchPanel from './../search-panel';
import Filter from './../filter';
import TodoList from './../todo-list';
import Task from '../task';

import classes from'./app.module.scss';

export default class App extends Component{

  state = {
    todoList: [
      {id: 1, text: 'Wake up', filt: 'done'},
      {id: 2, text: 'Eat breakfast', filt: 'done'},
      {id: 3, text: 'Go to work', filt: 'important'}
    ]
  }
  
  delItem = (id) => {
    this.setState(({todoList}) => {
      
      const idx = todoList.findIndex((item) => id === item.id);
      const newTodoList = [...todoList.slice(0, idx), ...todoList.slice(idx + 1)];

      return{
        todoList: newTodoList
      }

    })
  }

  addItem = () => {
    this.setState(({todoList}) => {
      const newTodoList = [...todoList];
      const itemTodo = {id: 4, text: 'Go to bed', filter: 'important'};
      newTodoList.push(itemTodo);

      return {
        todoList: newTodoList
      }
    })
  }

  filterItem = () => {
    this.setState(({todoList}) => {     
      if(this.state.todoList.filt === 'done'){
        return todoList
      }
    })
  }

  render() {
    return (
      <div className = {classes.appBlock}>
          <SearchPanel/>
          <Filter itemClickDone = {this.filterItem}/>
          <TodoList 
              todos = {this.state.todoList}
              onDelItem = {this.delItem}/>
          <Task onAddItem = {this.addItem}/>
      </div>
    );
  }
  
}