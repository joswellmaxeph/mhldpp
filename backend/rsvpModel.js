const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
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
  }
);

module.exports = mongoose.model('Rsvp', rsvpSchema);
