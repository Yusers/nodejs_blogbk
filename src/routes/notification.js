const express = require('express');
const router = express.Router();

const notificationController = require('../app/controllers/NotificationController');

router.get('/', notificationController.index);

module.exports = router;