const router = require('express').Router();
const apiRoutes = require('./api/index.js');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');


router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
    console.log('Cannot connect to server.');
});


module.exports = router;