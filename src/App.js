import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component { 
  constructor() {
    super();
    this.state = {
     mode:"dark",
    };
  }
  tooglebtn=()=>{
    if(this.state.mode==='dark'){
      this.setState({mode:'light'});
      document.body.style.backgroundColor='#c0f5ff';
    }
    else{
      this.setState({mode:'dark'});
    document.body.style.backgroundColor='#081f48';
    }
  }
  render() {
    return (
      <div>
        <Navbar tooglebtn={this.tooglebtn} mode={this.state.mode}/>
        <News mode={this.state.mode}/>
      </div>
    );
  }
}
