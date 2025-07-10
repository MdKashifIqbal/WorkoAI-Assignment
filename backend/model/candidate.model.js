const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Candidate name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address"
    ]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [
      /^[0-9]{10}$/,
      "Please enter a valid 10-digit phone number"
    ]
  },
  jobTitle: {
    type: String,
    required: [true, "Job title is required"],
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'hired'],
    default: 'pending',
  },
}, {
  timestamps: true // adds createdAt and updatedAt fields
})

module.exports = mongoose.model('Candidate',candidateSchema)