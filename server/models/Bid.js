import mongoose from 'mongoose';
import validate from 'mongoose-validator';

const userValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Name must not exceed {ARGS[1]} characters.'
  })
];

const BidSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'User is required.'],
    validate: userValidator
  },
  bid: {
    type: Number,
    required: [true, 'Bid is required.'],
    min: [0,'Insert a correct bid.']
  }
});

// export const Bid = mongoose.model('bid', UserSchema);
const Bid = module.exports = mongoose.model('bid', BidSchema);