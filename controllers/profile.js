const Profile = require('../models/profile');

exports.profile_get_all = (req, res, next) => {
    Profile.find()
        .then(data => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.profile_post_or_modify = (req, res, next) => {
    const profile = {
        // _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        level: req.body.level,
        totalKills: req.body.totalKills,
        champions: req.body.champions
    }

    Profile.findOne({ username: req.body.username })
        .then(data => {
            if(data == null) {
                // Create new
                Profile.create(profile)
                    .then(data => res.status(201).json({
                        message: 'Created profile',
                        data: data
                    }))
                    .catch(next);
            } else {
                // Update
                Profile.findOneAndUpdate({ username: data.username}, profile, { new: true })
                    .then(data => {
                        console.log(data);
                        res.status(200).json({
                            message: 'Updated profile',
                            data: data
                        });
                    })
                    .catch(err => {
                        console.log(error);
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}