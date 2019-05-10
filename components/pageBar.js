import React, { Component } from 'react';
class PageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: [1, 2, 3, 4, 5]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    let currPage = this.props.currPage;
    let totalPages = this.props.totalPages;
    if (this.props.currPage !== prevProps.currPage) {
      if (currPage > 3 && currPage < totalPages - 2) {
        this.setState({ pageNum: [currPage - 2, currPage - 1, currPage, currPage + 1, currPage + 2] })
      } else if (currPage >= totalPages - 2) {
        this.setState({ pageNum: [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages] })
      } else {
        this.setState({ pageNum: [1, 2, 3, 4, 5] })
      }
    }

  }

  render() {
    let totalPages = this.props.totalPages;
    let currPage = this.props.currPage;
    return (
      <div>
        <ul className="pagination">
          {(currPage === 1) ?
            (<li className="page-item disabled">
              <button className="page-link">&laquo;</button>
            </li>)
            :
            (<li className="page-item">
              <button className="page-link" onClick={() => this.props.searchPage(currPage - 1)}>&laquo;</button>
            </li>)}
          {this.state.pageNum.map(pageNum => (

            (currPage === pageNum) ?
              (<li className="page-item active" key={pageNum}>
                <button className="page-link" onClick={() => this.props.searchPage(pageNum)}>{pageNum}</button>
              </li>)
              :
              ((pageNum <= totalPages) ?
                (<li className="page-item" key={pageNum}>
                  <button className="page-link" onClick={() => this.props.searchPage(pageNum)}>{pageNum}</button>
                </li>)
                :
                ""
              )
          ))
          }
          {(currPage === totalPages) ?
            (<li className="page-item disabled">
              <button className="page-link">&raquo;</button>
            </li>)
            :
            (<li className="page-item">
              <button className="page-link" onClick={() => this.props.searchPage(currPage + 1)}>&raquo;</button>
            </li>)}
        </ul>
      </div>
    );
  }


}

export default PageBar;