import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
        <Router>
        <Switch>
          <Route path="/science">
            <News mode={this.state.mode} pagesize={12} country='in' chategory="science" api="8ef7402a234444528bb19e850817f443"/>
          </Route>
          <Route path="/technology">
            <News mode={this.state.mode} pagesize={12} country='in' chategory="technology" api="8ef7402a234444528bb19e850817f443"/>
          </Route>
          <Route path="/health">
            <News mode={this.state.mode} pagesize={12} country='in' chategory="health" api="8ef7402a234444528bb19e850817f443"/>
          </Route>
        </Switch>
        </Router>
       
      </div>
    );
  }
}
