var express = require('express');
var router = express.Router();
const siteControllers = require('../controllers/site.controllers')

// GET search page
router.get('/search',siteControllers.search);
router.get('/phone',siteControllers.phone);
router.get('/introduce',siteControllers.introduce);
router.get('/oder-client',siteControllers.oderClient);
router.get('/:slug/details',siteControllers.details);
/* GET home page. */


router.post('/stored',siteControllers.storeoder);
router.get('/',siteControllers.home);



module.exports = router;