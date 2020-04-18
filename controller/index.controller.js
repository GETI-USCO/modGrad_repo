const indexCtrl = {};

/////models//////
const User = require('../models/User');

indexCtrl.renderIndex = async (req, res) => {
    const userRoot = await User.findOne({role: 'root'});
    if(userRoot){
        //console.log('Ya existe un usuario root!!!');
        const isNone = true;
        res.render('index', {isNone});
        //res.render('index', {layout: false});
    } else {
        res.redirect('/users/signUpUserRootForm');
    }

    
};




module.exports = indexCtrl;