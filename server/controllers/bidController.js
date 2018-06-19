import Bid from '../models/Bid.js';
import { get } from 'mongoose';

export function renderBidForm(req, res) {
  res.send({
    test: 'test'
  });
};

export function saveBid(req, res) {

  const newBid = new Bid({
    user: req.body.user,
    bid: req.body.bid
  });

  newBid.save()
    .then((result) => {
      res.json({
        success: true,
        result: {
          user: result.user,
          bid: result.bid
        }
      });
    })
    .catch((err) => {
      if (err.errors) {
        if (err.errors.user) {
          res.status(400).json({ success: false, msg: err.errors.user.message });
          return;
        }
        if (err.errors.bid) {
          res.status(400).json({ success: false, msg: err.errors.bid.message });
          return;
        }
        res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
      }
    });
};

const getSecondBid = (result, user) => {
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i].user !== user) {
      return result[i].bid;
    }
    if (i === 0) {
      return result[0].bid;
    }
  }
}

export function getWinner(req, res) {
  Bid.find({})
  .then((result) => {
    result.sort((x, y) => { return x.bid - y.bid || x.date - y.date; });
    
    if (result[0]) {
      const user = result[result.length-1].user;
      const bid = parseInt(getSecondBid(result, user));
  
      res.json({
        message: `The winner is ${user} for ${bid}€`
      });
    } else {
      res.json({
        message: 'There are no bids yet.'
      });
    }

  })
  .catch((err) => {
    res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
  });
}

export function clearDatabase(req, res) {
  Bid.remove({})
  .catch((err) => {
    if (err.errors) {
      if (err.errors.user) {
        res.status(400).json({ success: false, msg: err.errors.user.message });
        return;
      }
      if (err.errors.bid) {
        res.status(400).json({ success: false, msg: err.errors.bid.message });
        return;
      }
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    }
  });
}