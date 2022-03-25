// Reaction (SCHEMA ONLY)
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const ReactionSchema = new Schema(
    // reactionId
    {
        // set custom id to avoid confusion with parent reaction _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        // Use Mongoose's ObjectId data type
        // Default value is set to a new ObjectId
        // reactionBody
        replyBody: {
            type: String,
            required: true
        }, 
        username: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// String
// Required
// 280 character maximum
// username

// String
// Required
// createdAt

// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// Schema Settings

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

