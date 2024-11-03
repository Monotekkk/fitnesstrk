import style from './App.module.css'
import Header from "../header";
import React from "react";
import Widget from '../widget';
const App = () => {
  return (
    <div className={style.app}>
      <Header/>
      <div className={style.container}>
        <Widget type='work'/>
        <Widget type='eat'/>
      </div>
    </div>
  );
}
export default App;