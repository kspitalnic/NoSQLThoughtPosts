const { Schema, model } = require('mongoose');

const ThoughtSchmea = new Schema({
    thoughtText:{
        type: String,
        required: 'Thought is required', 
        // 1 - 280 chars
    },
      createdAt: {
        type: Date,
        default: Date.now
        // getter method to format timestamp on query 
      },
      username: {
        type: String,
        required: 'Username is Required' 
      },
      reactions: []
});

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;