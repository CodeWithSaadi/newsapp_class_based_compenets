import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes       //import separate
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {             // snipt == "rcc"         Class base components

  state = {                   // class based components state for top loader
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>                              {/*   ""npm install react-router-dom --save ""   <Router> - <Routes> - <Route>      */}
          <Navbar />
          <LoadingBar                        //"top loading bar"   -- first of all have to download package for top-loading bar i.e npm i react-top-loading-bar ,,  we have to set progress, here we use class based components so first we declare state then set state for progress, use state in below news element as setProgress={this.setProgress}, then we call progress where we are fiching data as this.props.setProgress(10);
            color='#f11946'
            height={3}
            progress={this.state.progress}

          />

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={6} catagories={"general"} catagoriesName={'Headlines - General 📰'} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} catagories={"technology"} catagoriesName={'Headlines - Technology 🔭'} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} catagories={"business"} catagoriesName={'Headlines - Business 🕴️'} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} catagories={"entertainment"} catagoriesName={'Headlines - Entertainment 🎥'} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} catagories={"science"} catagoriesName={'Headlines - Science 🧑‍🔬'} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} catagories={"health"} catagoriesName={'Headlines - Health 👩‍⚕️'} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} catagories={"sports"} catagoriesName={'Headlines - Sports 🏅'} />} />
            <Route exact path="/cricket" element={<News setProgress={this.setProgress} key="cricket" pageSize={6} catagories={"cricket"} catagoriesName={'Headlines - Cricket 🏏'} />} />
          </Routes>

        </Router>




      </div>
    )
  }
}





