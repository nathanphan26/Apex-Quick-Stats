const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
mongoose.set('useFindAndModify', false);

const Profile = require('../models/profile');

router.get('/', (req, res, next) => {
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
});

// EXAMPLE POST
/*
    {
        "username": "yattnatyy",
        "level": "33",
        "totalKills": "125",
        "champions": [
                {
                    "legend": "Lifeline",
                    "stats": [
                        { "kills": "100" },
                        { "shotgunKills": "20" }
                    ]
                },
                {
                    "legend": "Bangalore",
                    "stats": [
                        { "kills": "1" }
                    ]
                }
            ]
    }
*/

router.post('/', (req, res, next) => {
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
                console.log("Is null");
                Profile.create(profile)
                    .then(data => res.status(201).json({
                        message: 'Created profile',
                        data: data
                    }))
                    .catch(next);
            } else {
                console.log("Is not null");
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

        // Profile.create(profile)
        // .then(data => res.status(201).json({
        //     message: 'Created profile',
        //     data: data
        // }))
        // .catch(next);
});

module.exports = router;