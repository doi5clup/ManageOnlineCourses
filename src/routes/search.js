const express = require('express');
const router = express.Router();

const searchController = require('../app/controllers/searchController');

router.get('/', loginController.index);
router.post('/', loginController.show);

module.exports = router;
