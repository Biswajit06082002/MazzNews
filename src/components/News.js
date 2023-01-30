import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
 static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
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
    handlePrev=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f241b6a171c441ad8b6994aa522e936f&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parsedData = await data.json();
      this.setState({loading: false});
      this.setState({
        page: this.state.page-1,
        articles: parsedData.articles
      })
    }
    handleNext=async()=>{
      if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f241b6a171c441ad8b6994aa522e936f&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parsedData = await data.json();
      this.setState({loading: false});
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles
      })
    }
    }
  render() {
   
    return (
      <div className='container my-3'>
        <h2>MazzNews Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className='row'>
        {this.state.articles.map((element)=>{
             return <div className='col-md-3 my-3' key={element.url}>
             <NewsItem  title={element.title?element.title.slice(0, 36):" "} description={element.description?element.description.slice(0, 88):" "} imageurl={element.urlToImage} newsurl={element.url}/>
             </div>    
        })}  
        </div>
        <div className='conatiner d-flex justify-content-between my-3'>
        <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrev}>Previous</button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNext}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
