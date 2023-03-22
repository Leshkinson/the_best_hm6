import {body} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {commentService} from "../services/comment-service";


const contentValidation = body('content')
    .isString().withMessage('Invalid type')
    .trim()
    .isLength({min: 20, max: 300}).withMessage('Not correct length')
    .notEmpty().withMessage('Field must not be empty')


export const checkIsUserOwnerComment = async (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    req.content.user.id !== req.content.comment.commentatorInfo.userId ? res.sendStatus(403) : next()
}


export const commentValidation = [contentValidation]

