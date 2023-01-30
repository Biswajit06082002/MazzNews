import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageurl, newsurl} = this.props; 
        return (
            <div>
                <div className="card">
                    <img src={!imageurl?"https://images.moneycontrol.com/static-mcnews/2023/01/sensex_nifty_sensexdown-1-770x433.jpg":imageurl}className="card-img-top" alt="..." style={{height: "200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} className="btn btn-sm btn-primary">Check out</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
