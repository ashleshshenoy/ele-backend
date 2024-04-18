const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  id: {
    type : Number,
    required : true,
},
  totalVote: {
    type: Number,
    required: true,
    default: 0
  },
  name: {
    type: String,
    required: true
  },
  party: {
    type: String,
    required: true
  }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
