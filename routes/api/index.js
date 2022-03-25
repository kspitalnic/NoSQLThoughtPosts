const router = require('express').Router();
const reactionRoutes = require('./reaction-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/reactions', reactionRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;