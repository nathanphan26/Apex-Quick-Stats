const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/api');

router.post('/', ApiController.api_post_username);
router.get('/search/:platform/:name', ApiController.api_get_username);

module.exports = router;