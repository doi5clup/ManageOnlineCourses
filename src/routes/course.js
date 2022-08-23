const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/join/:slug', courseController.join);
router.get('/agree', courseController.edit_in_database);
router.get('/:slug', courseController.show);
router.get('/', courseController.index);

module.exports = router;
