const express = require('express');
const router = express.Router();
const newsController = require('../../app/controllers/NewsController');

router.get('/', newsController.index);
router.post('/', newsController.send);
router.get('/:slug', newsController.slug);

module.exports = router;