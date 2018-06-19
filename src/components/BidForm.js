import React from 'react';
import axios from 'axios';
import '../styles/BidForm.css';

class BidForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.userRef = React.createRef();
    this.bidRef = React.createRef();
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);

  }
  handleSubmit(e) {

    e.preventDefault();

    axios.post('http://localhost:3001/api/saveBid', {
      user: this.userRef.current.value,
      bid: this.bidRef.current.value
    });
  }

  render () {
    return (
      <div className="container">
        <form className="bid-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="user">ᴜsᴇʀ</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="user"
                ref={this.userRef}
                placeholder='Woze Stevniak'
                maxLength='40'
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="bid">ʙɪᴅ</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                name="bid"
                ref={this.bidRef}
                maxLength='40'
                min='1'
                required
              />
            </div>
          </div>
          <div className="row">
            <button type="submit" className="make-bid">ᴍᴀᴋᴇ ᴀ ʙɪᴅ</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BidForm;