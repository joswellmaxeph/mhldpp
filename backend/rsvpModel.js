const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    },
    attending: {
      type: String,
      required: true
    },
    plusGuests: {
      type: String,
      required: false
    },
    bringingForPotluck: {
      type: String,
      required: false
    },
    notes: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Rsvp', rsvpSchema);
