const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/profile');

router.get('/', ProfileController.profile_get_all);
router.post('/', ProfileController.profile_post_or_modify);

module.exports = router;