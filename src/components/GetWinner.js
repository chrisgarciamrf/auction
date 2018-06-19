import React from 'react';
import axios from 'axios';

class GetWinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = { winner: '' };

    this.render = this.render.bind(this);
  }

  handleSubmit() {
    axios.post('http://localhost:3001/api/clearDatabase');
  }

  componentDidMount() {
    fetch('/api/getWinner')
      .then(response => response.json())
      .then(json => this.setState({ winner: json }));
  }

  render () {
    return (
      <div className="container">
        <div>{this.state.winner.message}</div>
        <form className="bid-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <button type="submit" className="delete-database">ᴅᴇʟᴇᴛᴇ ᴅᴀᴛᴀʙᴀsᴇ</button>
          </div>
        </form>
      </div>
    )
  }
}

export default GetWinner;