import React, { Component } from 'react';
const MAX_LENGH = 250;
class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }

  componentDidMount() {
    let content = (this.props.overview.length > MAX_LENGH) ?
      (<div>
        {`${this.props.overview.substring(0, MAX_LENGH)}...`}<span style={{ color: `blue` }} onClick={this.readMore}>read more</span>
      </div>)
      :
      (<p>{this.props.overview}</p>);
    this.setState({ content });

  }
  render() {

    return (
      <div>
        {this.state.content}
      </div>

    );
  }

  readMore = () => {
    let content = <p>{this.props.overview}</p>
    this.setState({ content });
  }
}

export default Overview;