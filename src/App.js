import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "dark",
    };
  }
  tooglebtn = () => {
    if (this.state.mode === "dark") {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "#c0f5ff";
    } else {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#081f48";
    }
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar tooglebtn={this.tooglebtn} mode={this.state.mode} />
          <Switch>
            <Route exact path="/">
              <News
                mode={this.state.mode}
                key="india"
                pagesize={12}
                main="q=india"
                chategory="everything"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Top Headlines"
              />
            </Route>
            <Route exact path="/science">
              <News
                mode={this.state.mode}
                key="science"
                pagesize={12}
                main="q=science"
                chategory="everything"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Science News"
              />
            </Route>
            <Route exact path="/technology">
              <News
                mode={this.state.mode}
                key="technology"
                pagesize={12}
                main="q=technology"
                chategory="everything"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Technology News"
              />
            </Route>
            <Route exact path="/foreign">
              <News
                mode={this.state.mode}
                key="foreign"
                pagesize={12}
                main="q=foreign"
                chategory="everything"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Foreign News"
              />
            </Route>
            <Route exact path="/sports">
              <News
                mode={this.state.mode}
                key="sports"
                pagesize={12}
                main="q=sports"
                chategory="everything"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Sports News"
              />
            </Route>
            <Route exact path="/health">
              <News
                mode={this.state.mode}
                key="health"
                pagesize={12}
                main="country=in&category=health"
                chategory="top-headlines"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Health News"
              />
            </Route>
            <Route exact path="/genarel">
              <News
                key="general"
                mode={this.state.mode}
                pagesize={12}
                main="country=in&category=general"
                chategory="top-headlines"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Genarel News"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
              key="entertainment"
                mode={this.state.mode}
                pagesize={12}
                main="country=in&category=entertainment"
                chategory="top-headlines"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Entertainment News"
              />
            </Route>
            <Route exact path="/business">
              <News
                mode={this.state.mode}
                key="business"
                pagesize={12}
                main="country=in&category=business"
                chategory="top-headlines"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Business News"
              />
            </Route>
            <Route exact path="/education">
              <News
                mode={this.state.mode}
                key="education"
                pagesize={12}
                main="q=education"
                chategory="everything"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Education News"
              />
            </Route>
            <Route exact path="/political">
              <News
                mode={this.state.mode}
                key="politics"
                pagesize={12}
                main="q=politics"
                chategory="everything"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Political News"
              />
            </Route>
            <Route exact path="/weather">
              <News
                mode={this.state.mode}
                key="weather"
                pagesize={12}
                main="q=weather"
                chategory="everything"
                api="6ebeedef487840ea979d7f3db895d659"
                content="Weather News"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
