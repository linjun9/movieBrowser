import React, { Component } from 'react';
import Result from "./result";
import PageBar from "./pageBar";

class Results extends Component {

  render() {
    return (
      <div>
        <div>
          {(this.props.results) ?
            (this.props.results.results.map(result =>
              (<Result
                result={result}
                key={result.id}
              />)))
            :
            ""}
        </div>
        <div>
          {(this.props.results) ?
            <PageBar
              totalPages={this.props.results.total_pages}
              currPage={this.props.results.page}
              searchPage={(page) => this.props.searchPage(page)}
            ></PageBar>
            :
            ""}
        </div>
      </div>

    );
  };
}

export default Results;