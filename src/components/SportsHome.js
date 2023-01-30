import React, { Component } from 'react'
import NewsItem from './NewsItem'

import PropTypes from 'prop-types'

export class SportsHome extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'sports'
     }
     static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
     }
        constructor(){
            super();
            this.state = {
                articles: [],
                loading: false,
                page: 1
            }
        }
        async componentDidMount(){
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f241b6a171c441ad8b6994aa522e936f&pagesize=${this.props.pageSize}`;
          this.setState({loading: true});
          let data= await fetch(url);
          let parsedData = await data.json();
          this.setState({loading: false});
          this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
        }
  render() {
    return (
        <div className='container my-3'>
        <h2>Sports Headlines</h2>

        <div className='row'>
        {this.state.articles.map((element)=>{
             return <div className='col-md-3 my-3' key={element.url}>
             <NewsItem  title={element.title?element.title.slice(0, 36):" "} description={element.description?element.description.slice(0, 88):" "} imageurl={element.urlToImage} newsurl={element.url}/>
             </div>    
        })}  
        </div>
       
      </div>
    )
  }
}

export default SportsHome
