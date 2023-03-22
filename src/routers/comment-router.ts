import {Router} from "express";
import {commentController} from "../controllers/comment-controller";
import {authMiddleware} from "../middleware/authMiddleware";
import {commentValidation} from "../validators/comment-validation";
import {inputValidationMiddleware} from "../middleware/input-validation-middleware";


export const commentRouter = Router({})

//-------------------GET---------------//
commentRouter.get('/:id',  commentController.getCommentById)
//-------------------PUT---------------//
commentRouter.put('/:id', authMiddleware, commentValidation, inputValidationMiddleware, commentController.changeComment)
//-------------------DELETE---------------//
commentRouter.delete('/:id', authMiddleware, commentController.deleteComment)

