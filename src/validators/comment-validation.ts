import {body} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {commentService} from "../services/comment-service";


const contentValidation = body('content')
    .isString().withMessage('Invalid type')
    .trim()
    .isLength({min: 20, max: 300}).withMessage('Not correct length')
    .notEmpty().withMessage('Field must not be empty')


export const test = async (req: Request, res: Response, next: NextFunction) => {
    const comment = await commentService.getCommentById(req.params.id)
    console.log('comment', comment)
    if (comment && req.content.user) {
        req.content.user.id !== comment.commentatorInfo.userId && res.sendStatus(403)
        return
    }
    next()
}


export const commentValidation = [contentValidation]

