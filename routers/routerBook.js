const express = require('express');
const bookController = require('../controller/controllerBook');
const router = express.Router();
router.get('/book',bookController.getListBook);
router.post('/book/save',bookController.saveBook);
module.exports = router;