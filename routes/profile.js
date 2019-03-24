const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/profile');

router.get('/', ProfileController.profile_get_all);
router.get('/:platform/:name', ProfileController.profile_get_platform_username);
router.post('/', ProfileController.profile_post_or_modify);

module.exports = router;