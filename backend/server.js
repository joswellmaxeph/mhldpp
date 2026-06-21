const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5001;

const frontEndUrl = process.env.FRONTEND_URL;

const corsOptions = {
  origin: frontEndUrl,
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));

const rsvpModel = require('./rsvpModel');

// Middleware
app.use(express.json());
// MongoDB Connection
const dbUrl = process.env.MONGO_URI;
mongoose.connect(dbUrl, { dbName: "mhld26" })
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err));
// Basic Route
app.get('/api', (req, res) => {
 res.send('Hello from the backend!');
});

app.get('/api/rsvp', async (req, res) => {
  try {
    const rsvps = await rsvpModel.find({});
    res.json(rsvps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/rsvp', (req, res) => {
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
