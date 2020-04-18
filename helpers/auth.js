const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }  
  req.flash('error', 'Usuario no autenticado!!!');
  res.redirect('/users/signinForm');
};


module.exports = helpers;
