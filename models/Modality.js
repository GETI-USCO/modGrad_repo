const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    advisor_ID: {
        type: String,
        required: true
    },
    co_advisor_ID: {
        type: String,
    },
    student1_ID: {
        type: String,
        required: true       
    },  
    student2_ID: {
        type: String      
    }, 
    status: {
        type: String,   ///En desarrollo, No aprobado, Aprobado.
        required: true       
    }, 
    proposal_evaluation_result: {  ///Evaluación del anteproyecto.
        type: String,   ///En desarrollo, No aprobado, Aprobado.
        required: true       
    }, 
    final_evaluation_result: {
        type: String,   ///En desarrollo, No aprobado, Aprobado.
        required: true       
    }, 
    created_date: {
        type: Date
    }         
},{
        timestamps: true
});

module.exports = model('Modality', ModalitySchema);