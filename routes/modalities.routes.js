const router = require('express').Router();

const {isAuthenticated} = require('../helpers/auth');

const {createModalityForm
} = require('../controller/modalities.controller');

router.get('/createModalityForm', isAuthenticated, createModalityForm);




module.exports = router;
