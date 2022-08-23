const express = require('express');
const router = express.Router();

const teacherController = require('../app/controllers/teacherController');

router.get('/course/:slug', teacherController.show_course);
router.get('/create', teacherController.show_create);
router.post('/create', teacherController.create);
router.get('/', teacherController.index);

module.exports = router;
