import {body} from "express-validator";

const contentValidation = body('comment')
    .isString().withMessage('Invalid type')
    .trim()
    .isLength({min: 20, max: 300}).withMessage('Not correct length')
    .notEmpty().withMessage('Field must not be empty')








export const commentValidation = [contentValidation]

