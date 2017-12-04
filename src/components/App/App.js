import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import SearchForm from '../SearchForm';
import Gifs from '../Gifs';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gifArr: [],
    }
  }

  componentWillMount() {
    let promise = axios.get("https://api.giphy.com/v1/gifs/trending?api_key=CmsUrUWgr6fbmZmQ4yawhSHvm7QLdaMM&limit=20&rating=PG-13")

      promise.then((response) => {
        
        let data = response.data.data
        const gifJSX = data.map((data, i) =>
          <span key={i}>
            <img src={data.images.original.url} alt="giphy" className="gif-image"/>
          </span>
        )
        this.setState({
          gifArr: gifJSX
        })
      })
  }

  searchHandler = () => {
    let promise = axios.get("https://api.giphy.com/v1/gifs/search?api_key=CmsUrUWgr6fbmZmQ4yawhSHvm7QLdaMM&q=" + this.searchInput.value)
    promise.then((response) => {

      let data = response.data.data
      const gifJSX = data.map((data, i) =>
        <span key={i}>
          <img src={data.images.original.url} alt="giphy" className="gif-image" />
        </span>
      )
      this.setState({
        gifArr: gifJSX
      })
    })
  }
 
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <NavBar />
          <form className="searchForm">
            <input
              type="text"
              className="search"
              placeholder="Search for fun!"
              ref={(self) => { this.searchInput = self }}
            />
            <button
              type="button"
              className="button"
              onClick={this.searchHandler}
            >SEARCH</button>
          </form>
        </header>
        <Gifs gifArr={this.state.gifArr} />

      </div>
    );
  }
}

export default App;
