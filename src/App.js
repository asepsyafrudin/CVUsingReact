import React, { Component } from 'react'
import './App.css';
import TopBackground from './Component/Header/TopBackground';
import MiddleBackground from './Component/MiddleBackground/MiddleBackground';
import Content from './Component/Content/Content';


export class App extends Component {
  render() {
    return (
      <>
        <button onClick={()=>{window.print()}} id="non-printable">Print CV</button>
        <TopBackground/>
        <div id="printable">
          <MiddleBackground/>
          <Content/>
        </div>
      </>
    )
  }
}



export default App

