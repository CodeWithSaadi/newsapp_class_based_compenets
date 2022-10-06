import React, { Component } from 'react'                                 //  "rce"
import NewsItem from './NewsItem'
import Spinner from './Spinner'
// import PropTypes from 'prop-types'                                    // "impt" import proptype
import logo from './logo.png'

import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    // articles of news api from my Api key is composed in an array

    capitalizeFirstLetter = (string) => {                                                               //function to "capitalizeFirstLetter"
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {                                                                                  //    "State"  use to construct states in class based components,  i.e import articles from json files 
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,


        }
        document.title = `${this.capitalizeFirstLetter(this.props.catagories)} -Shinkiari News`        // "Tittle" with catagories & capitalizeFirstLetter
    }


    async updateNews() {                                                                              // "fetch api"  use to fetch api here instead of writing articles in array,     async - await function use  -- and then call bellow functions -- ?pageSize is removed b/c content repeat, mine mistake
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/everything?q=${this.props.catagories}&pagesizee=2&apiKey=80abc41a3b8b4598ab46dc8a49a45981&page=${this.state.page}`
        this.setState({ loading: true });                                                            //set state for loading
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);                                              //progress for top loading bar
    }

    async componentDidMount() {
        this.updateNews();
    }


    handlePrevClick = async () => {                                                // function of  button go to "next page "  but not use at the end because we use infinite scroll
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }


    handleNexClick = async () => {                                                // function of  button go to "next page "
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {                // Logic use for "spinner-loading"

            this.setState({ page: this.state.page + 1 })
            this.updateNews();
        }
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/everything?q=${this.props.catagories}&pagesizee=2&apiKey=80abc41a3b8b4598ab46dc8a49a45981&page=${this.state.page}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };



    render() {
        let { catagoriesName } = this.props;
        return (
            <div className='container my- text-center '>
                {/* <h1 className='bg-dark text-light py-3'>  Shinkiari News :: Top Headlines</h1> */}
                <img src={logo} alt="" />
                <div className="bg-danger p-2 rounded ">
                    <h1 >'{catagoriesName}'</h1>

                </div>


                {this.state.loading && <Spinner />}

                {/* Infinite scrolling, you can add it from goggle than you have to spinner component, hasMore, and "fetch more function" 🆙  */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >

                    <div className="container">
                        <div className="row my-3">
                            {/* // iteration of element in one div, take elements from json file  */}
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4  col-sm-6 my-2" key={element.url} >
                                        <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} totalResults={element.source.name} />       {/* title={element.title.slice(0, 10)} can  be use for limited words -- here we use data from json */}
                                    </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>



            </div>
        )
    }
}

export default News




//CodeWithSaadi ApiNews   80abc41a3b8b4598ab46dc8a49a45981
//SaadJamil NewsApi        80abc41a3b8b4598ab46dc8a49a45981
//Softech1 ApiNews         753dc42dae0d42aa9904ef1e4aa61629