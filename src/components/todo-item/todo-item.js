import React, { Component } from 'react';

import classes from './todo-item.module.scss';

import checkMark from './img/checkMark.png';
import deleteMark from './img/deleteMark.png';

export default class TodoItem extends Component {

    state = {
        done: false,
        del: false
    }

    itemDone=()=>{
        this.setState(({done})=>{
            return {
                done: !done
            }
        })
    }
    
    
    render(){
        
        const {text, onDelItem} = this.props;
        const {todoItem, todoItemDone, todoItemBlock, itemButtonOK, itemButtonX} = classes;
        let itemClasses = todoItem;

        if (this.state.done) {
            itemClasses += ` ${todoItemDone}`;
        }
    
        return(
            <div className = {todoItemBlock}>
            <li onClick = {this.itemDone}           
            className={itemClasses}>{text}</li>
            <div>            
                <button  onClick = {this.itemDone} className={itemButtonOK}>
                    <img src={checkMark} alt="logo"/>
                </button>
                <button  onClick = {onDelItem} className={itemButtonX}>
                <img src={deleteMark} alt="logo"/>
                </button>
            </div>
            </div>

        );
    }
}