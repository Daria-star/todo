import React, { Component } from 'react';

import classes from './filter.module.scss';

export default class Filter extends Component {


    buttons = [
        {name: 'all', text: 'All'},
        {name: 'done', text: 'Done'},
        {name: 'important', text: 'Important'},
    ]
    // state = {
    //     clickAll: false,
    //     clickDone: false,
    //     clickImportant: false
    // }

    // itemClickAll=()=>{
    //     this.setState(()=>{
    //         return {
    //             clickAll: true,
    //             clickDone: false,
    //             clickImportant: false
    //         }
    //     })
    // }
    // itemClickDone=()=>{
    //     this.setState(()=>{
    //         return {
    //             clickDone: true,
    //             clickAll: false,
    //             clickImportant: false
    //         }
    //     })
    // }
    // itemClickImportant=()=>{
    //     this.setState(()=>{
    //         return {
    //             clickImportant: true,
    //             clickAll: false,
    //             clickDone: false
    //         }
    //     })
    // }

    render(){
        const {filterBlock, filterBlock__itemAll, filterBlock__itemAllActive} = classes;
        let itemclass = filterBlock__itemAll;

        if (this.props.filterName === 'all') {
            itemclass += ` ${filterBlock__itemAllActive}`;
        }else if (this.props.filterName === 'done') {
            itemclass += ` ${filterBlock__itemAllActive}`;
        } else if (this.props.filterName === 'important') {
            itemclass += ` ${filterBlock__itemAllActive}`;
        }

        const btns = this.buttons.map((item) => {
            return(
                <div
                    key = {item.name}
                    onClick = {() => this.props.onFilterItem(item.name)}
                    className = {filterBlock__itemAll + ' ' + itemclass}>
                    {item.text}
                </div>
                
            )
        })

        return(
            <div className = {filterBlock}>
                {btns}
            </div>
        ); 
    }
    
}