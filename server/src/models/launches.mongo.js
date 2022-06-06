const mongoose = require('mongoose')

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  // target: {
  //   // Foreign model (Joins)
  //   type: mongoose.ObjectId,
  //   ref: 'Planet',
  // },
  target: {
    // Gonna use NoSQL style, storing all relevant data here instead of foreign key
    type: String,
    required: true,
  },
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
  customers: [String],
})
