import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsUrl, author, date, totalResults } = this.props;          //destructuring method to pull...  props
        return (
            <div>
                <div className="card  " >
                    <div className=' position-absolute top-0 end-0 d-flex '> <span className="badge rounded-pill bg-danger" >{totalResults}</span></div>
                    <img src={imageURL} className="card-img-top" alt="This side is not reached" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...  </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>        {/* Author and date  -- date = to GMTstring */}
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More...</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem 