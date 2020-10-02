import React from 'react';
import TodoItem from './../todo-item';

import classes from './todo-list.module.scss';

const TodoList = ({todos, onDelItem}) => {

  const todosEl = todos.map((item) => {
    return <TodoItem key = {item.id} text = {item.text} onDelItem = {()=> {onDelItem(item.id)}}/>
  });

  return(
      <div className={classes.todoListBlock}>
        {todosEl}
      </div>
  );

}

export default TodoList;