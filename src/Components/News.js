import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2bb7e5c1493b4b8d831ff0434ad293cc"
    let data=await fetch(url);
    let parsdata=await data.json();
    console.log(parsdata)
    this.setState({articles:parsdata.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey-Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            if(element.urlToImage!==null){
            return (
                <div className="col-md-4"  key={element.url}>
                <Newsitem
                  title={element.title===null?"":element.title}
                  description={element.description===null?"":element.description}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          }
          else{
            return false;
          }
          })}
        </div>
      </div>
    );
  }
}

export default News;
