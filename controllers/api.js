const axios = require('axios');

const port = process.env.PORT || 5000;

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
            // console.log(data);
            const obj = createProfile(data);
            
            axios.post(`http://localhost:${port}/profile`, obj)
                .then(response => {
                    console.log(response.data);
                    res.json(response.data);
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}

function createProfile(data) {
    const obj = {};
    obj.username = data.data.metadata.platformUserHandle;
    obj.level = data.data.metadata.level;
    obj.totalKills = data.data.stats[1].value;
    obj.champions = [];
    data.data.children.forEach(child => {
        let newChild = {};
        newChild.legend = child.metadata.legend_name;
        newChild.stats = [];
        child.stats.forEach(stat => {
            let newStat = {};
            newStat.statName = stat.metadata.name;
            newStat.statValue = stat.value;
            newChild.stats.push(newStat);
        })
        obj.champions.push(newChild);
    });
    return obj;
}