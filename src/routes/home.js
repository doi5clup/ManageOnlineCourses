const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.get('/home', homeController.home);
router.post('/home', homeController.search);
router.get('/', homeController.index);
router.post('/', homeController.search);

module.exports = router;
