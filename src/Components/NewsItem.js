import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/105276378-GettyImages-915805964.jpg?v=1611241099":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
          </div>
          </div>
        )
    }
}
