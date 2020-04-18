const router = require('express').Router();

const {isAuthenticated} = require('../helpers/auth');

//Controllers
const {seeAllStudent, 
    seeAllProfessor,
    userByEmailFinded,
    findUserbyEmailForm,
    userByIdFinded,
    findUserbyIdForm,
    renderAllUsers,
    changePasswdForm,
    changePasswd,
    forgetPasswd,
    renderSignUpUserForm,
    signupUser,    
    deleteUser,
    renderEditUserForm,
    start,
    updateUser, 
    SignUpUserRootForm, 
    signupRoot,     
    renderSigInForm,    
    signin,
    logout } = require('../controller/users.controller');

////////////Usuarios - búsquedas ////////////////////////////////
router.get('/users/findUserByEmailForm', isAuthenticated, findUserbyEmailForm)
router.post('/users/userByEmailFinded', isAuthenticated, userByEmailFinded)

router.get('/users/seeAllProfesors', isAuthenticated, seeAllProfessor);
router.get('/users/seeAllStudent', isAuthenticated, seeAllStudent);

router.get('/users/findUserByIDForm', isAuthenticated, findUserbyIdForm);
router.post('/users/userByIdFinded', isAuthenticated, userByIdFinded);

router.get('/users/allUserList', isAuthenticated, renderAllUsers); ///Lista a todos los usuarios

////////////////////----Usuarios-----///////////////////////
router.get('/users/changePasswdForm', isAuthenticated, changePasswdForm); ///cambiar contraseña form

router.post('/users/passwdChanged', isAuthenticated, changePasswd); ////password cambiado

router.get('/users/forgetPasswd', forgetPasswd);

router.get('/users/signupUserForm', isAuthenticated, renderSignUpUserForm); ///Formulario para agregar usuarios

router.post('/users/signupUser', isAuthenticated, signupUser); ///Agregar usuarios

router.delete('/users/deleteUser/:id', isAuthenticated, deleteUser); ///Borrar usuario

router.get('/users/editUserForm/:id', isAuthenticated, renderEditUserForm); ///Formulario para editar usuarios

router.put('/users/editUser/:id', isAuthenticated, updateUser);/////actualiza usuario

router.get('/users/started', isAuthenticated, start);

//////////Creación usuario root///////////////
router.get('/users/signUpUserRootForm', SignUpUserRootForm) ///Formulario para agregar root

router.post('/users/signupRoot', signupRoot); ///Agregar root


/////////////----Ingreso de usuarios-----///////////////////////
router.get('/users/signinForm', renderSigInForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);


module.exports = router;