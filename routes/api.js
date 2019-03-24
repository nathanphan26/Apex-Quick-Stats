const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');

router.get('/search/:platform/:name', ApiController.api_get_username);

module.exports = router;