const express = require('express');
const router = express.Router();
const meController = require('../../app/controllers/MeController');

router.get('/stored/courses', meController.me);
router.get('/recycleBin/courses', meController.recycleBin)

module.exports = router;