const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require("passport");

////////////Usuarios - búsquedas ////////////////////////////////
usersCtrl.findUserbyEmailForm = (req, res) => {
    if(req.user.role == 'root'){
        const isRoot = true;       
        res.render('users/findUserByEmailForm', {isRoot});
    }else if(req.user.role == 'admin'){
        const isAdmin = true;        
        res.render('users/findUserByEmailForm', {isAdmin});
    }else if(req.user.role == 'professor'){
        const isProfessor = true;        
        res.render('users/findUserByEmailForm', {isProfessor});
    }else if(req.user.role == 'student'){
        const isStudent = true;        
        res.render('users/findUserByEmailForm', {isStudent});
    }
};

usersCtrl.userByEmailFinded = async (req, res) => {
    //console.log(req.body);
    const {email} = req.body;   
    const userFinded = await User.find({email});
    //console.log(profFinded);
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/userByIdEmailFinded', {userFinded, isRoot});
    } else if(req.user.role == 'admin') {
        const isAdmin = true;
        res.render('users/userByIdEmailFinded', {userFinded, isAdmin});
    }else if(req.user.role == 'professor') {
        const isProfessor = true;
        res.render('users/userByIdEmailFindedProfStudent', {userFinded, isProfessor});
    }else if(req.user.role == 'student') {
        const isStudent = true;
        res.render('users/userByIdEmailFindedProfStudent', {userFinded, isStudent});
    }
};

usersCtrl.findUserbyIdForm = (req, res) => {
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/findUserByIdForm', {isRoot});
    };
    if(req.user.role == 'admin'){
        const isAdmin = true;
        res.render('users/findUserByIdForm', {isAdmin});
    };
    if(req.user.role == 'professor'){
        const isProfessor = true;
        res.render('users/findUserByIdForm', {isProfessor});
    };
    if(req.user.role == 'student'){
        const isStudent = true;
        res.render('users/findUserByIdForm', {isStudent});
    };
};

usersCtrl.userByIdFinded = async (req, res) => {
    //console.log(req.body);
    const {identification} = req.body;     
    const userFinded = await User.find({identification});
    //console.log(profFinded);
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/userByIdEmailFinded', {userFinded, isRoot});
    }
    if(req.user.role == 'admin'){
        const isAdmin = true;
        res.render('users/userByIdEmailFinded', {userFinded, isAdmin});
    }
    if(req.user.role == 'professor'){
        const isProfessor = true;
        res.render('users/userByIdEmailFindedProfStudent', {userFinded, isProfessor});
    }
    if(req.user.role == 'student'){
        const isStudent = true;
        res.render('users/userByIdEmailFindedProfStudent', {userFinded, isStudent});
    }
};

usersCtrl.seeAllProfessor = async (req, res) => {
    const role = 'professor';    
    const allUserList = await User.find({role});
    //console.log(allProfessorsList); 
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/seeAllUsers', {allUserList, isRoot})
    } else if(req.user.role == 'admin') {
        const isAdmin = true;
        res.render('users/seeAllUsers', {allUserList, isAdmin})
    }
    else if(req.user.role == 'professor') {
        const isProfessor = true;
        res.render('users/seeAllUsersProfStudent', {allUserList, isProfessor})
    }
    else if(req.user.role == 'student') {
        const isStudent = true;
        res.render('users/seeAllUsersProfStudent', {allUserList, isStudent})
    }
};

usersCtrl.seeAllStudent = async (req, res) => {
    const role = 'student';    
    const allUserList = await User.find({role});
    //console.log(allUserList); 
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/seeAllUsers', {allUserList, isRoot})
    }else if(req.user.role == 'admin') {
        const isAdmin = true;
        res.render('users/seeAllUsers', {allUserList, isAdmin})
    }else if(req.user.role == 'professor') {
        const isProfessor = true;
        res.render('users/seeAllUsersProfStudent', {allUserList, isProfessor})
    }else if(req.user.role == 'student') {
        const isStudent = true;
        res.render('users/seeAllUsersProfStudent', {allUserList, isStudent})
    }
};

usersCtrl.renderAllUsers = async (req, res) => {      
    const userList = await User.find(); 
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/allUserList', { userList, isRoot});
    }  
};

//////////Contraseñas Usuarios///////////////////
usersCtrl.changePasswdForm = (req, res) => {
    const user = req.user;
    //console.log(user);
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/changeMyPasswd', { isRoot, user });
    }else if (req.user.role == 'admin'){
        const isAdmin = true;
        res.render('users/changeMyPasswd', { isAdmin, user });
    }else if (req.user.role == 'professor'){
        const isProfessor = true;
        res.render('users/changeMyPasswd', { isProfessor, user });
    }else if (req.user.role == 'student'){
        const isStudent = true;
        res.render('users/changeMyPasswd', { isStudent, user });
    }    
}

usersCtrl.changePasswd =  async (req, res) => {
    //console.log(req.user)
    const errors = [];
    const { actualPassword, confirm_actualPassword, new_password } = req.body;
    const match = await req.user.matchPassword(actualPassword);    
    //console.log(req.body, match)

    if (actualPassword != confirm_actualPassword) {
        errors.push({ text: 'Las contraseñas actuales no coinciden!!!' });
    }
    if(!match){
        errors.push({ text: 'No digitaste bien tu contraseña actual!!!'});
    }    
    if (new_password.length < 5) {
        errors.push({ text: 'La nueva contraseña debe tener almenos 5 caracteres!!!'});
    }  

    if (errors.length > 0) {
        if(req.user.role == 'root'){
            const isRoot = true;
            res.render('users/changeMyPasswd', {isRoot, errors});
        }else if (req.user.role == 'admin'){
            const isAdmin = true;
            res.render('users/changeMyPasswd', {isAdmin, errors});
        }else if (req.user.role == 'professor'){
            const isProfessor = true;
            res.render('users/changeMyPasswd', {isProfessor, errors});
        }else if (req.user.role == 'student'){
            const isStudent = true;
            res.render('users/changeMyPasswd', {isStudent, errors});
        }               
    } else {
        password = await req.user.encryptPassword(new_password);        
        //console.log(password);
        const id = req.user._id;
        await User.findByIdAndUpdate(id, { password });
        req.flash('success_msg', 'Contraseña actualizada!!!');
        res.redirect('/users/started')        
    }
};

usersCtrl.forgetPasswd = (req, res) => {        
    res.render('users/forgetPasswd');
}

////////////////////////Usuarios - creación, actualización y borrado//////////////////////////////////////
usersCtrl.renderSignUpUserForm = (req, res) => { ////para dar de alta o agregar a un usuario
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/signupUserForm', { isRoot });
    }else if (req.user.role == 'admin'){
        const isAdmin = true;
        res.render('users/signupUserForm', { isAdmin });
    }    
};

usersCtrl.signupUser = async (req, res) => {  ////para dar de alta o agregar a un usuario
    //console.log(req.body);
    const errors = [];
    const { name, lastname, sec_lastname, identification, email, password, confirm_password, role } = req.body;   
    if (password != confirm_password) {
        errors.push({ text: 'Las contraseñas no coinciden!!!' });
    }
    if (password.length < 5) {
        errors.push({ text: 'Las contraseñas tener almenos 5 caracteres!!!' });
    }
    if (name === '') {
        errors.push({ text: 'Debe ingresar un nombre!!!' });
    }
    if (lastname === '') {
        errors.push({ text: 'Debe ingresar al menos el primer apellido!!!' });
    }
    if (identification === '') {
        errors.push({ text: 'Debe ingresar un número de cédula!!!' });
    }
    if (email === '') {
        errors.push({ text: 'Debe ingresar un correo electrónico válido!!!' });
    }
    if (errors.length > 0) {
        if(req.user.role == 'root'){
            const isRoot = true;
            res.render('users/signupUserForm', { errors, name, lastname, sec_lastname, identification, email,  isRoot});
        }else if (req.user.role == 'admin'){
            const isAdmin = true;
            res.render('users/signupUserForm', { errors, name, lastname, sec_lastname, identification, email,  isAdmin});
        }         
    } else {
        const userIdentification = await User.findOne({ identification: identification });
        if (userIdentification) {
            errors.push({ text: 'La identificación del usuario ya existe en nuestra base de datos!!!' });
            if(req.user.role == 'root'){
                const isRoot = true;
                res.render('users/signupUserForm', { errors, name, lastname, sec_lastname, identification, email, isRoot });
            }else if (req.user.role == 'admin'){
                const isAdmin = true;
                res.render('users/signupUserForm', { errors, name, lastname, sec_lastname, identification, email, isAdmin });
            }            
        } else {
            const data = { name, lastname, sec_lastname, identification, password, email, role };
            const newUser = new User(data);
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Usuario agregado!!!');
            res.redirect('/users/started');
        }
    }
};
usersCtrl.deleteUser = async (req, res) => {    
    await User.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Usuario eliminado!!!');
    res.redirect('/users/allUserList');
}

usersCtrl.renderEditUserForm = async (req, res) => {
    const userToEdit = await User.findById(req.params.id);  
    idUserToEdit =  req.params.id;   
    //console.log('El usuario a editar es: ', userToEdit);
    if(req.user.role == 'root'){
        const isRoot = true;        
        res.render('users/editUserForm', { userToEdit, idUserToEdit, isRoot });
    } else if ((userToEdit.role != 'root') && (userToEdit.role != 'admin') && (req.user.role == 'admin')) {
        const isAdmin = true;        
        res.render('users/editUserForm', { userToEdit, idUserToEdit, isAdmin });
    } else{
        //errors = {text: 'Usted no tienen autorización para esta operación!!!'};
        req.flash('error', 'Usted no tienen autorización para para actualizar root o admin!!!t');
        res.redirect('/users/started')
    }     
}

usersCtrl.updateUser = async (req, res) => {    
    const { name, lastname, sec_lastname, identification, email, role} = req.body;   
    //console.log('Estos son los datos del usuario a editar: ', { name, lastname, sec_lastname, identification, email, role,}); 
    //console.log('Este es el ID del usuario a editar: ', req.params.id);
    if((req.user.role == 'root') || (req.user.role == 'admin')) {           
        await User.findByIdAndUpdate(req.params.id, { name, lastname, sec_lastname, identification, email, role });
        req.flash('success_msg', 'Usuario actualizado!!!');        
        res.redirect('/users/started');     
    } else{
        req.flash('success_msg', 'Usted no tiene autorización para editar usuarios!!');
        const actualUser = req.user;
        const roleActualUser = actualUser.role;        
        if(roleActualUser == 'professor'){
            const isProfessor = true;
            res.render('/users/started', {actualUser, isProfessor});
        } else if(roleActualUser == 'student'){
            const isStudent = true;
            res.render('/users/started', {actualUser, isStudent});
        }       
    }      
};

//////////Creación usuario root///////////////
usersCtrl.SignUpUserRootForm = (req, res) => {
    res.render('users/signupRootForm');
};

usersCtrl.signupRoot = async (req, res) => {
    
    const actualRoot = await User.findOne({ role: 'root' });

    if(actualRoot){
        req.flash('error', 'No tiene autorización para crear root');
        res.redirect('/');
    } else {
        const errors = [];
        const { name, lastname, sec_lastname, identification, email, password, confirm_password, role } = req.body;        
        if (password != confirm_password) {
            errors.push({ text: 'Las contraseñas no coinciden!!!' });
        }
        if (password.length < 5) {
            errors.push({ text: 'Las contraseñas tener almenos 5 caracteres!!!' });
        }
        if (name === '') {
            errors.push({ text: 'Debe ingresar un nombre!!!' });
        }
        if (lastname === '') {
            errors.push({ text: 'Debe ingresar al menos el primer apellido!!!' });
        }
        if (identification === '') {
            errors.push({ text: 'Debe ingresar un número de cédula!!!' });
        }
        if (email === '') {
            errors.push({ text: 'Debe ingresar un correo electrónico válido!!!' });
        }
        if (errors.length > 0) {
            res.render('/users/signUpUserRootForm', { errors, name, lastname, sec_lastname, identification, email });
        } else {
            const userIdentification = await User.findOne({ identification: identification });
            if (userIdentification) {
                errors.push({ text: 'La identificación del usuario ya existe en nuestra base de datos!!!' });
                res.render('users/signupUserForm', { errors, name, lastname, sec_lastname, identification, email });
            } else {
                const data = { name, lastname, sec_lastname, identification, password, email, role };
                const newUser = new User(data);
                newUser.password = await newUser.encryptPassword(password);
                await newUser.save();
                req.flash('success_msg', 'Usuario root agregado!!!');
                res.redirect('/users/started');
            }
        }   
    } 
};

///////////Ingreso a la aplicación///////////////////
usersCtrl.renderSigInForm = (req, res) => {
    const isNone = true;
    res.render('users/signin', {isNone});
};

usersCtrl.signin = passport.authenticate("local", {    
    successRedirect: "/users/started",
    failureRedirect: "/users/signinForm",
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash("success_msg", "Usted acaba de salir de ModGrad - Hasta pronto!!!");
    res.redirect("/");
};

//////////////////Usuarios - Ruta de inicio ///////////////////////
usersCtrl.start = (req, res) => {    
    if(req.user.role == 'root'){
        const isRoot = true;
        res.render('users/start', { isRoot });
    }else if (req.user.role == 'admin'){
        const isAdmin = true;
        res.render('users/start', { isAdmin });
    }else if (req.user.role == 'professor'){
        const isProfessor = true;
        res.render('users/start', { isProfessor });
    }else if (req.user.role == 'student'){
        const isStudent = true;
        res.render('users/start', { isStudent });
    }      
};



module.exports = usersCtrl;