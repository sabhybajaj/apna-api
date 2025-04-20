const express = require('express');
const dsaTopicController = require('../controllers/dsaTopicController');

const router = express.Router();

router.post('/create', dsaTopicController.createTopic);
router.get('/', dsaTopicController.getTopics);
router.patch('/update-status', dsaTopicController.updateSubTopicStatus);

module.exports = router;