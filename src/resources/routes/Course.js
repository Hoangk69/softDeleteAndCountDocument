const express = require('express');
const router = express.Router();
const courseController = require('../../app/controllers/CourseController');

router.post('/store', courseController.store);
router.get('/creat', courseController.creat);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/hard', courseController.hardDelete);
router.delete('/:id', courseController.softDelete);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.detail);

module.exports = router;