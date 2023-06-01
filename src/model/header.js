const mongoose = require('mongoose');
const Header = mongoose.model('header', {
    title: {
        type: String,
        required: true,
        validate(value) {
            if(value.length > 10) {
            throw new Error('El nombre tiene que tener menos de 10 caracteres')
        }
        }
    },
    description: {
        type: String,
        required: true
    }
    });

module.exports = Header
