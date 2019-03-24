const axios = require('axios');

exports.api_get_username = (req, res, next) => {
    const params = {
        headers: {
            'TRN-Api-Key': '2ed6cd7d-d0b2-42a2-aee8-89ceb090092a',
            "Access-Control-Allow-Origin": "*"
        }
    }

    const url = `https://public-api.tracker.gg/apex/v1/standard/profile/${req.params.platform}/${req.params.name}`;

    axios.get(url, params)
        .then(response => {
            let data = response.data;
            console.log(data);
            res.json(data);
        })
        .catch(err => console.log(err));
}