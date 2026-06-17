const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const rsvpModel = require('./rsvpModel');

require('dotenv').config();
const app = express();
const PORT = 5000
// Middleware
app.use(cors());
app.use(express.json());
// MongoDB Connection
const dbUrl = process.env.MONGO_URI;
console.log(dbUrl);
mongoose.connect(process.env.MONGO_URI, { dbName: "mhld26" })
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err));
// Basic Route
app.get('/', (req, res) => {
 res.send('Hello from the backend!');
});

app.get('/rsvp', async (req, res) => {
  try {
    const rsvps = await rsvpModel.find({});
    res.json(rsvps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/rsvp', (req, res) => {
  try {
    const newRsvp = new rsvpModel(req.body);
    newRsvp.save();
    res.json(newRsvp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
