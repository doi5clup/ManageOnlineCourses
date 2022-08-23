const express = require('express');
const router = express.Router();

const studentController = require('../app/controllers/studentController');

router.get('/add_money', studentController.add_money);
router.post('/add_money', studentController.add_money_to_database);
router.get('/course/:slug', studentController.show_course);
router.get('/', studentController.index);

module.exports = router;
