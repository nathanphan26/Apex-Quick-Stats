const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    statName: String,
    statValue: Number
},{ _id: false });

const ChampionSchema = new Schema({
    legend: String,
    image: String,
    stats: [StatsSchema]
},{ _id: false });

const ProfileSchema = new Schema({
    // _id: mongoose.Types.ObjectId,
    username: String,
    level: Number,
    totalKills: Number,
    champions: [ChampionSchema]
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;