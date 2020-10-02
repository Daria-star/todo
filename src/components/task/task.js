import React, { Component } from 'react';

import classes from './task.module.scss';

export default class Task extends Component{
  
  state = {
    text: ''
  }

  onTextChange = (e) => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.text);
    this.setState({
      text: ''
    })
}


  render(){
    const taskText = 'Task';
    const button = 'Save item';


    return (
      <div>
        <form onSubmit = {this.onSubmit}>
          <div className = {classes.taskWriteList}>
              <div><p className = {classes.taskWriteList__txt}>{taskText}</p></div>
              <div><input  onChange = {this.onTextChange} value = {this.state.text} className = {classes.taskWriteList__input} type="text" placeholder = "What do you need to do?" /></div>
          </div>
          <div className = {classes.taskAddList}>
              <button  type = "submit" className = {classes.taskAddList__btn}>{button}</button>
          </div>
        </form>        
      </div>
    );
  }   
  
}