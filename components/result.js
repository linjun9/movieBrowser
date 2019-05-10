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
            <img alt={this.props.result.title} src={posterUrl(this.props.result.poster_path)} />
          </div>
          <div className="col-12 col-md-9">
            <div className="container">
              <div className="row align-items-center">
                <h3 className="col-12 col-md-9">{this.props.result.title}</h3>
                <span className="col-12 col-md-3 badge badge-pill badge-success">Release Date: {this.props.result.release_date}</span>
              </div>

            </div>
            <span className="badge badge-pill badge-warning">Popularity: {this.props.result.popularity}</span>
            {(this.props.result.overview) ? <Overview overview={this.props.result.overview}></Overview> : NO_OVERVIEW}

          </div>
        </div>
        <style jsx>{`
      .res {
        margin: 20px 0;
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