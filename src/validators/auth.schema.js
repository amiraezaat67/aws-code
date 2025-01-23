import Joi from "joi";

export const SignUpSchema = {
    body: Joi.object({
        username: Joi.string().length(20).required().messages({
            'any.required': 'Username is required',
            'string.empty': 'Username is required',
            'string.base': 'Username must be a string',
            'string.length': 'Username must be less than 20 characters',
        }),
        email: Joi.string().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.string().required(),
        phone: Joi.string().required(),
    }),
}