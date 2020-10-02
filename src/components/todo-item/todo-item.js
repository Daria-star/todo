import React, { Component } from 'react';

import classes from './todo-item.module.scss';

import checkMark from './img/checkMark.png';
import deleteMark from './img/deleteMark.png';

export default class TodoItem extends Component {

    // state = {
    //     done: false,
    //     del: false
    // }

    // itemDone=()=>{
    //     this.setState(({done})=>{
    //         return {
    //             done: !done
    //         }
    //     })
    // }
    
    
    render(){
        
        const {text, onItemDone, onDelItem} = this.props;
        const {todoItem, todoItemDone, todoItemBlock, itemButtonOK, itemButtonX} = classes;
        let itemClasses = todoItem;

        if (this.props.doneImportant) {
            itemClasses += ` ${todoItemDone}`;
        }
    
        return(
            <div className = {todoItemBlock}>
            <li onClick = {onItemDone}           
            className={itemClasses}>{text}</li>
            <div>            
                <button  onClick = {onItemDone} className={itemButtonOK}>
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