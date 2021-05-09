const Router = require('express');
const router = new Router();
const serviceRouter = require('./serviceRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/service', serviceRouter);
router.use('/type', typeRouter);

module.exports = router;