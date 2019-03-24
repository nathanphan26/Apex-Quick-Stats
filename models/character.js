const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for character
const CharacterSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name text field is required']
  },
  level: Number,
  stats: Schema.Types.Mixed
})

//create model for character
const Character = mongoose.model('character', CharacterSchema);

module.exports = Character;