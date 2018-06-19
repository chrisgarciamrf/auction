import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../components/About';
import BidForm from '../components/BidForm';
import GetWinner from '../components/GetWinner';
import '../styles/App.css';

const AuctionApp = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">ᴍᴀᴋᴇ ᴀ ʙɪᴅ</Link>
        </li>
        <li>
          <Link to="/winner">ɢᴇᴛ ᴛʜᴇ ᴡɪɴɴᴇʀ</Link>
        </li>
        <li>
          <Link to="/about">ᴀʙᴏᴜᴛ ᴍᴇ</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={BidForm} />
      <Route path="/winner" component={GetWinner} />      
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default AuctionApp;


