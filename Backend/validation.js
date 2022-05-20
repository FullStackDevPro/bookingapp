// Validation
const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};


// Booking Validation
const bookingValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string(),
        date: Joi.string(),
        slot: Joi.string()
    });

    return schema.validate(data);
};

module.exports = {
    registerValidation,
    loginValidation,
    bookingValidation
};