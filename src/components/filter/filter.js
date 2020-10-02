import React, { Component } from 'react';

import classes from './filter.module.scss';

export default class Filter extends Component {

    state = {
        clickAll: false,
        clickDone: false,
        clickImportant: false
    }

    itemClickAll=()=>{
        this.setState(()=>{
            return {
                clickAll: true,
                clickDone: false,
                clickImportant: false
            }
        })
    }
    itemClickDone=()=>{
        this.setState(()=>{
            return {
                clickDone: true,
                clickAll: false,
                clickImportant: false
            }
        })
    }
    itemClickImportant=()=>{
        this.setState(()=>{
            return {
                clickImportant: true,
                clickAll: false,
                clickDone: false
            }
        })
    }

    render(){
        const {filterBlock, filterBlock__item, filterBlock__item_withoutBorder, filterBlock__item_all, filterBlock__item_allClick,
                filterBlock__item_done, filterBlock__item_doneClick, filterBlock__item_important, filterBlock__item_importantClick} = classes;
        let itemclassAll = filterBlock__item_all;
        let itemclassDone = filterBlock__item_done;
        let itemclassImportant = filterBlock__item_important;

        if (this.state.clickAll) {
            itemclassAll += ` ${filterBlock__item_allClick}`;
        }
        if (this.state.clickDone) {
            itemclassDone += ` ${filterBlock__item_doneClick}`;
        }
        if (this.state.clickImportant) {
            itemclassImportant += ` ${filterBlock__item_importantClick}`;
        }

        return(
            <div className = {filterBlock}>
                <div onClick = {this.itemClickAll} className={filterBlock__item + ' ' + itemclassAll}>
                All
                </div>
                <div onClick = {this.itemClickDone} className={filterBlock__item + ' ' + itemclassDone}>
                Done
                </div>
                <div onClick = {this.itemClickImportant} className={filterBlock__item + ' ' + filterBlock__item_withoutBorder + ' ' + itemclassImportant}>
                Important
                </div>
            </div>
        ); 
    }
    
}

