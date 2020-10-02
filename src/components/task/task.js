import React, { Component } from 'react';

import classes from './task.module.scss';

export default class Task extends Component{
  

  render(){
    const taskText = 'Task';
    const button = 'Save item';

    const {onAddItem} = this.props;

    return (
      <div>
        <div className = {classes.taskWriteList}>
            <div><p className = {classes.taskWriteList__txt}>{taskText}</p></div>
            <div><input className = {classes.taskWriteList__input} type="text" placeholder = "What do you need to do?" /></div>
        </div>
        <div className = {classes.taskAddList}>
            <button  onClick ={onAddItem} className = {classes.taskAddList__btn}>{button}</button>
        </div>
      </div>
    );
  }   
  
}