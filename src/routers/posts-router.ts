import {Router} from "express";
import {checkPostId} from "../validators/generalValidation";
import {inputValidationMiddleware} from "../middleware/input-validation-middleware";
import {authorizationGuard} from "../middleware/authorization-guard";
import {postController} from "../controllers/post-controller";
import {postValidations} from "../validators/post-validation";
import {authMiddleware} from "../middleware/authMiddleware";
import {commentValidation} from "../validators/comment-validation";


export const postsRouter = Router({})

//-------------------GET---------------//
postsRouter.get('/', postController.getAllPost)
postsRouter.get('/:id', postController.getPostById)
postsRouter.get('/:id/comments', authMiddleware, postController.getPostComments)
//-------------------POST---------------//
postsRouter.post('/', authorizationGuard, postValidations, inputValidationMiddleware, postController.createPost)
postsRouter.post('/:id/comments', checkPostId, commentValidation, inputValidationMiddleware, postController.createdComment)
//-------------------PUT---------------//
postsRouter.put('/:id', authorizationGuard, checkPostId, postValidations, inputValidationMiddleware, postController.changePost)
//-------------------DELETE---------------//
postsRouter.delete('/:id', authorizationGuard, postController.deletePost)
