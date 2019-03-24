const express = require('express');
const router = express.Router();
const Character = require('../models/character');
const axios = require('axios');
const request = require('request');
const fetch = require('node-fetch');

const Legend = require('../legend');

router.get('/search/:name', (req, res, next) => {
    const params = {
        headers: {
            'TRN-Api-Key': '2ed6cd7d-d0b2-42a2-aee8-89ceb090092a',
            "Access-Control-Allow-Origin": "*"
        }
    }

    const url = `https://public-api.tracker.gg/apex/v1/standard/profile/5/${req.params.name}`;

    axios.get(url, params)
        .then(response => {
            let data = response.data;
            let obj = {};
            obj['username'] = data.data.metadata.platformUserHandle;
            obj['level'] = data.data.stats[0].value;
            obj['total_kills'] = data.data.stats[1].value;
            // obj['character1'] = data.data.children[0].metadata.legend_name;
            // obj['stat1'] = data.data.children[0].stats[0].value;
            obj['legend1'] = new Legend(data.data.children[0].metadata.legend_name, data.data.children[0].stats);

            // console.log(obj);
            res.json(obj);
        })
        .catch(err => console.log(err));
});

// router.post('/profile', (req, res, next) => {
//     let username = req.body.username;

//     const options = {  
//         method: 'GET',
//         headers: {
//             'TRN-Api-Key': '2ed6cd7d-d0b2-42a2-aee8-89ceb090092a',
//             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//             "Access-Control-Allow-Origin": "*"
//         }
//     };

//     // axios.get('https://public-api.tracker.gg/apex/v1/standard/profile/5/ohyump', options)
//     //     .then(response => {
//     //         console.log(response.data);
//     //         res.json(response.data);
//     //     })
//     //     .catch(response => console.log(response));

//     fetch('https://public-api.tracker.gg/apex/v1/standard/profile/5/' + username, options)
//         .then(response => {
//             return response.json();
//         })
//         .then(json => {
//             console.log(json.data);
//             let obj = {};
//             obj['name'] = username;
//             obj['level'] = json.data.metadata.level;
//             obj['stats'] = json.data.stats;
//             Character.create(obj)
//                 .then(data => res.json(data))
//                 .catch(next);
//             // res.json(json.data);
//         })
//         .catch(err => console.err(err));
// });

// router.delete('/profile/:id', (req, res, next) => {

// })

module.exports = router;