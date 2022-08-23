const express = require('express');
const router = express.Router();

const registerController = require('../app/controllers/registerController');

router.get('/', registerController.index);
router.post('/', registerController.add_to_database);

module.exports = router;
