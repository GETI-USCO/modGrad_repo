const router = require('express').Router();

//Controllers
const { renderIndex} = require('../controller/index.controller');


router.get('/', renderIndex);



module.exports = router;