var express = require('express');
var router = express.Router();

const adminControllers = require('../controllers/adminCotrollers');


// GET search page
router.post('/store',adminControllers.store);
router.get('/add',adminControllers.add);
router.get('/edit/:slug',adminControllers.edit);
router.put('/:slug',adminControllers.update);
router.delete('/:slug',adminControllers.delete);
router.delete('/oder/:_id',adminControllers.confirm);
router.get('/oder',adminControllers.oder);
router.get('/',adminControllers.home);




/* GET home page. */





module.exports = router;