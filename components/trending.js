import React, { Component } from 'react';
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "78c5519b461fad225a8634c75edb20b5";
const posterUrl = path => "https://image.tmdb.org/t/p/w154/" + path;
class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaType: "movie",
      timeWindow: "day",
      result: []
    };
  }

  componentDidMount() {
    let url = "".concat(baseUrl, "/trending", `/${this.state.mediaType}`, `/${this.state.timeWindow}`, `?api_key=${apiKey}`);
    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({ result: data.results });
      });
  }
  render() {
    return (
      <div className="trending">
        {this.state.result.map(result =>
          <img src={posterUrl(result.poster_path)} alt={result.title} key={result.id} />
        )}
        <style jsx>{`
      .trending {
        margin: 20px 0px;
      }
      `}
        </style>
      </div>

    );
  };
}

export default Trending;