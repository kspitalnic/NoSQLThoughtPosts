// Reaction (SCHEMA ONLY)
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        // reactionId
        // set custom id to avoid confusion with parent _id
        // Use Mongoose's ObjectId data type
        // Default value is set to a new ObjectId
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        // reactionBody
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        }, 
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;
