const { Schema, model } = require('mongoose');

const ThoughtSchmea = new Schema({
    thoughtText:{
        type: String,
        required: 'Thought is required', 
        trim: true,
        // 1 - 280 chars
    },
      createdAt: {
        type: Date,
        default: Date.now,
        // getter method to format timestamp on query 
        get: createdAtVal => dateFormat(createdAtVal)

      },
      username: {
        type: String,
        required: 'Username is Required' 
      },
      reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reaction'
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      // prevents virtuals from creating duplicate of _id as `id`
      id: false
    }
  );
  
  //Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
  // get total count of reactions on retrieval
  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.reduce(
      (total, reaction) => total + reaction.length + 1,
      0
    );
  });


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;