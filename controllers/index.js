const express = require('express');
const router = express.Router();

const userController = require('../api/usercontroller');
const postController = require('../api/postcontroller');
const commentController = require('../api/commentcontroller');

router.post('/users', userController.createUser);
router.post('/posts', postController.createPost);
router.post('/comments', commentController.createPost);

module.exports = router;
