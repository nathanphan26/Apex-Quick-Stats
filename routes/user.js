const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.email, 10, (err, hash) => {
        if(err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const user = {
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
            }
            User.create(user)
                .then(data => {
                    res.status(201).json({
                        message: "User created",
                        data: data
                    });
                })
                .catch(next);
        }
    })
});

module.exports = router;