const express = require('express');
const storeController = require('../controller/controllerStore');
const router = express.Router();
router.get('/store',storeController.getAllStores);
router.post('/store/save',storeController.saveStore);
module.exports = router;