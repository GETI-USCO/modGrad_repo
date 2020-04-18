const {Schema, model} = require('mongoose');
bcrypt = require('bcryptjs');

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    sec_lastname: {
        type: String
    },
    identification: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,        
        unique: true
    }, 
    password: {
        type: String,
        required: true,                
    },
    role: {
        type: String,   ///Tres roles: student professor, admin, root
        required: true
    },
    last_login_date: {
        type: Date,
        default: Date.now()
    }         
},{
        timestamps: true
});


UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = model('User', UserSchema);