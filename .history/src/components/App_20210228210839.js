import React from 'react';
import classes from './App.scss';

const  App = () {
  console.log('Log: [classes]', classes);
  return <div className={classes.app}>Test app</div>;
}

export default App;
