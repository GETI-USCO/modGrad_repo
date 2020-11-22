const modalitiesCtrl = {};

// Models
const User = require('../models/User');
const Modality = require('../models/Modality');

modalitiesCtrl.createModalityForm = (req, res) => {
    if(req.user.role == 'root'){
        const isRoot = true;       
        res.render('modalities/createModalityForm', {isRoot});
    }else if(req.user.role == 'admin'){
        const isAdmin = true;        
        res.render('modalities/createModalityForm', {isAdmin});
    }else if(req.user.role == 'professor'){
        const isProfessor = true;        
        res.render('modalities/createModalityForm', {isProfessor});
    }   
}

modalitiesCtrl.modalityCreated = (req, res) => {
    console.log(req.body);
    res.send('Aquí vamos');
}


module.exports = modalitiesCtrl;

