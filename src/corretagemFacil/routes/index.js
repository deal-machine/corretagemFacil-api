const { Router } = require('express')

const router = Router();

const vehiclesRoutes = require('./vehicles.routes');
const domainsRoutes = require('./domain.routes');
const automobilesRoutes = require('./automobiles.routes');

router.use('/vehicles', vehiclesRoutes);
router.use('/domains', domainsRoutes);
router.use('/automobiles', automobilesRoutes);

module.exports = router;