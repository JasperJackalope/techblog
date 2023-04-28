const router = require('express').Router();

const userRoutes = require('./usercontroller.js');
const postRoutes = require('./postcontroller.js');
const commentRoutes = require('./commentcontroller.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;