const express = require('express');
const router = express.Router();
const axios = require('axios');

const ApiController = require('../controllers/api');

const port = process.env.PORT || 5000;

router.post('/', ApiController.api_post_username);
router.get('/search/:platform/:name', ApiController.api_get_username);

module.exports = router;