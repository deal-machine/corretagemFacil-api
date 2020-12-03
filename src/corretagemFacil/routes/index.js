const { Router } = require('express')

const router = Router();

const vehiclesRoutes = require('./vehicles.routes');
const domainRouter = require('./domains.routes');
const automobilesRoutes = require('./automobiles.routes');

router.use('/vehicles', vehiclesRoutes);
router.use('/domains', domainRouter);
router.use('/automobiles', automobilesRoutes);

module.exports = router;