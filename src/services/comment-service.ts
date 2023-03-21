import {BlogResponseType, CommentResponseType, CommentType} from "../types/types";
import {commentRepository} from "../repositories/comment-repository";


export const commentService = {

    async getCommentById(id: string): Promise<CommentResponseType | null> {
        const filter = {id}
        const comment = await commentRepository.getCommentById(filter)
        if (comment) {
            return comment
        }
        return null
    },

    async changeComment(id: string, comment: CommentType) {
        const {content} = comment
        const filter = {id}
        const updateComment = {$set: {content}} as { $set: CommentResponseType }
        return await commentRepository.changeComment(filter, updateComment)
    },

    async deleteComment(id: string) {
      const filter = {id}
        return await commentRepository.deleteComment(filter)
    }
}