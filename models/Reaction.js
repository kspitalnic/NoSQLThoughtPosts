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
            required: true
            //280 CHAR MAX 
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
            getters: true
        }
    }
);

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;
