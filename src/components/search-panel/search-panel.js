import React from 'react';

import classes from './search-panel.module.scss';

const SearchPanel = () => {
 
  const searchPanelText = 'To do:';
  const searchPanelBtn = 'Search';
  

  return (
    <div className = {classes.searchPanel}>
      <div><p className = {classes.searchPanel__txt}>{searchPanelText}</p></div>
      <div><input className = {classes.searchPanel__input} type="text" placeholder = "search..." /></div>
      <div><button className = {classes.searchPanel__btn}>{searchPanelBtn}</button></div>
    </div>
  );


}

export default SearchPanel;