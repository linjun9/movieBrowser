import React, { Component } from 'react';
import Overview from './overview';
const posterUrl = path => "https://image.tmdb.org/t/p/w154/" + path;
const NO_OVERVIEW = "We don't find any overview for this movie.";

class Result extends Component {

  render() {
    return (

      <div className="container res">
        <div className="row align-items-center">
          <div className="col-12 col-md-3">
            <img alt="Grandfather with child" src={posterUrl(this.props.result.poster_path)} />
          </div>
          <div className="col-12 col-md-9">
            <h3>{this.props.result.title}</h3>
            {(this.props.result.overview) ? <Overview overview={this.props.result.overview}></Overview> : NO_OVERVIEW}

          </div>
        </div>
        <style jsx>{`
      .res {
        margin: 15px 0;
      }
      h3{
        color: black;
      }
    `}</style>
      </div>
    );
  }

}

export default Result;