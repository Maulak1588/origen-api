const mongoose = require('mongoose');
const Dish = mongoose.model('dish', {
    title: {
        type: String,
        required: true,
        validate(value) {
            if(value.length > 20) {
            throw new Error('El nombre tiene que tener menos de 20 caracteres')
        }
        }
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
    });

module.exports = Dish
