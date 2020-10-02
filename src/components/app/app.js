import React, { Component } from 'react';


import SearchPanel from './../search-panel';
import Filter from './../filter';
import TodoList from './../todo-list';
import Task from '../task';

import classes from'./app.module.scss';

export default class App extends Component{

  state = {
    todoList: [
      {id: 1, text: 'Wake up', done: false, important: false},
      {id: 2, text: 'Eat breakfast', done: false, important: false},
      {id: 3, text: 'Go to work', done: false, important: false}
    ],
    filter: 'all'
  }

  itemId = 4;

  itemDone=(done, important)=>{
    this.setState(({todoList})=>{
        return {
            done: !todoList.done
        }
    })
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

  addItem = (text) => {
      console.log(text);
      const newTodoItem = {id: this.itemId++, text: text};

      this.setState(({todoList}) => {
        const newTodoList = [
          ...todoList,
          newTodoItem
        ]
        return {
          todoList: newTodoList
        }
      })
  }

  filterItem = (name) => {
    this.setState({
      filter: name
    })
    if (name === 'done') {
      this.setState(({todoList}) => {
        const newArr = todoList.filter((item) => {
          return item.id === 1
        })
        return{
          todoList: newArr
        }
      })
    }
  }

  render() {
    return (
      <div className = {classes.appBlock}>
          <SearchPanel/>
          <Filter
              onFilterItem = {this.filterItem}
              filterName = {this.state.filter}/>
          <TodoList 
              todos = {this.state.todoList}
              onDelItem = {this.delItem}
              onItemDone = {this.itemDone}
              doneImportant = {this.state.todoList.done}/>
          <Task onAddItem = {this.addItem}/>
      </div>
    );
  }
  
}