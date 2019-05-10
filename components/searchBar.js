import React, { Component } from 'react';
import Trending from './trending.js';
import Results from './results.js';

const baseUrl = "https://api.themoviedb.org/3/search";
const apiKey = "78c5519b461fad225a8634c75edb20b5";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      result: null
    };
  }

  render() {
    return (

      <div className="form-group">

        <form onSubmit={this.search} className="form-inline">
          <div className="container-fluid">
            <div className="row">
              <input
                type="text"
                className="movie form-control form-control-lg col-10"
                name="movie"
                placeholder="Enter the movie name here"
                value={this.movie}
                onChange={this.handleOnChange}
                required
              />
              <button type="submit" className="btn btn-primary col">SEARCH</button>
            </div>
          </div>
        </form>
        {(!this.state.result) ?
          <Trending></Trending>
          :
          <Results
            results={this.state.result}
            searchPage={(page) => this.searchPage(page)}>
          </Results>}
      </div>
    );
  }

  handleOnChange = (event) => {
    let movie = event.target.value;
    this.setState({ movie });
  };

  search = (event) => {
    event.preventDefault();
    let url = "".concat(baseUrl, "/movie", `?api_key=${apiKey}&query=${this.state.movie}&page=1`);
    fetch(url)
      .then(result => result.json())
      .then(result => {
        let failedCode = result.status_code;
        if (!failedCode) {
          this.setState({ result });
        } else {
          let reason = result.status_message;
          this.setState({ result: reason });
        }

      })
  }

  searchPage = (page) => {
    let url = "".concat(baseUrl, "/movie", `?api_key=${apiKey}&query=${this.state.movie}&page=${page}`);
    fetch(url)
      .then(result => result.json())
      .then(result => {
        let failedCode = result.status_code;
        if (!failedCode) {
          this.setState({ result });
        } else {
          let reason = result.status_message;
          this.setState({ result: reason });
        }

      })
  }
}

export default SearchBar;