import {Router} from "express";
import {commentController} from "../controllers/comment-controller";


export const commentRouter = Router({})

//-------------------GET---------------//
commentRouter.get('/:id', commentController.getCommentById)
//-------------------PUT---------------//
commentRouter.put('/:id', commentController.changeComment)
//-------------------DELETE---------------//
commentRouter.delete('/:id', commentController.deleteComment)

