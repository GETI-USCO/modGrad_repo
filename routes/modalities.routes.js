const router = require('express').Router();

const {isAuthenticated} = require('../helpers/auth');

const {createModalityForm,
        modalityCreated
        } = require('../controller/modalities.controller');

router.get('/modalities/createModalityForm', isAuthenticated, createModalityForm);
router.post('/modalities/modalityCreated', isAuthenticated, modalityCreated)



module.exports = router;
