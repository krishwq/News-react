import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2bb7e5c1493b4b8d831ff0434ad293cc&page=1&pagesize=18"
    let data=await fetch(url);
    let parsdata=await data.json();
    console.log(parsdata)
    this.setState({
      articles:parsdata.articles,
      totalResult:parsdata.totalResults
    })
  }
  handlenextclick=async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResult/18)){

    }else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2bb7e5c1493b4b8d831ff0434ad293cc&page=${this.state.page+1}&pagesize=18`
    let data=await fetch(url);
    let parsdata=await data.json();
    console.log(parsdata)
   this.setState({
    page:this.state.page+1,
    articles:parsdata.articles
   })
  }
  }
  handlepreviousclick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2bb7e5c1493b4b8d831ff0434ad293cc&page=${this.state.page-1}&pagesize=18`
    let data=await fetch(url);
    let parsdata=await data.json();
    console.log(parsdata)
   this.setState({
    page:this.state.page-1,
    articles:parsdata.articles
   })
  }
  
  render() {
    let {mode}=this.props;
    return (
      <div className="container my-3">
        <h1 className={`text-center text-${mode==='dark'?'light':'dark'} `}>NewsMonkey-Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
                <div className="col-md-4"  key={element.url}>
                <Newsitem
                  title={element.title===null?"":element.title.slice(0,45)}
                  description={element.description===null?"":element.description.slice(0,100)}
                  imageurl={element.urlToImage===null?"https://t4.ftcdn.net/jpg/00/88/18/29/360_F_88182922_w5dCuL3EprD1MNEkQ7wF5rBSLDOz8z6v.jpg":element.urlToImage}
                  newsurl={element.url}
                  mode={mode}
                />
              </div>
            );
          }
          )}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className={`btn btn-${mode==='dark'?'light':'dark'}`} onClick={this.handlepreviousclick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page===Math.ceil(this.state.totalResult/18)} className={`btn btn-${mode==='dark'?'light':'dark'}`} onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
