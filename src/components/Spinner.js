import React, { Component } from 'react'
// import loading from './loading.gif'


export default class Spinner extends Component {
  render() {
    return (
      <>
        {/* Import Spinner from Bootstrap or use gif of spinner */}
        <div className="spinner-grow my-3 text-primary  " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow my-3 text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow my-3 text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow my-3 text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow my-3 text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow my-3 text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow my-3 text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow my-3 text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>)
  }
}




//How to use in components
//  {this.state.loading && <Spinner/>}   where we need to show spinner
// further it use in News components in there places  1- async componentDidMount()  2- handlePrevClick  3- handleNexClick
// in two concepts  ---


// this.setState({ loading: true });                 //set state for loading
      //   this.setState({
      //     articles: parsedData.articles, totalResults: parsedData.totalResults,
      //     loading: false
      // })



//Place where  we use Spinner

      // {this.state.loading && <Spinner />}

      //           <div className="row my-3">
      //               {!this.state.loading && this.state.articles.map((element) => {