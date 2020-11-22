const {Schema, model} = require('mongoose');

const ModalitySchema = Schema({
    modalityTitle: {
        type: String,
        required: true,
        unique: true
    },
    modalityType: {
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
    description: {
        type: String,
    },
    jury1_ID: {
        type: String,
        required: true
    },
    jury2_ID: {
        type: String,
        required: true
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
    prelimunary_draft_evaluation_result1: {  ///Evaluación del anteproyecto.
        type: String,   ///Pendiente, No aprobado, Aprobado.
        required: true       
    }, 
    prelimunary_draft_evaluation_result2: {  ///Evaluación del anteproyecto.
        type: String,   ///Pendiente, No aprobado, Aprobado.
        required: true       
    },
    final_evaluation_result1: {
        type: String,   ///Pendiente, No aprobado, Aprobado.
        required: true       
    }, 
    final_evaluation_result2: {
        type: String,   ///Pendiente, No aprobado, Aprobado.
        required: true       
    },
    created_date: {
        type: Date
    }         
},{
        timestamps: true
});

module.exports = model('Modality', ModalitySchema);