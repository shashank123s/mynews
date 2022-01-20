import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state={
        articles: [],
        loading:false
        }
      }
    //   news api
    async  componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c32daaf137624b03aba1b94cb1f67c53";
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
      }
    render() {
        return (
            <div className="container my-3">
                <h2>mynews-Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{

                    return <div className="col-md-4" key={element.url} >
                        <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                </div>
            </div>

            
        )
    }
}
export default News