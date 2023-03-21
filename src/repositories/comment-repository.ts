import {CommentResponseFromDBType, CommentResponseType} from "../types/types";
import {commentCollections} from "../../mongoDB";
import {Sort} from "mongodb";


export const commentRepository = {

    async getCommentById(filter: { id: string }): Promise<CommentResponseType | null> {
        return commentCollections.findOne(filter)
    },

    async getPostComments(filter:any,  sort: Sort, skip: number, limit: number):Promise<CommentResponseFromDBType[]>{
        return commentCollections.find(filter).sort(sort).skip(skip).limit(limit).toArray()
    },

    async getTotalCount(filter:any){
        return commentCollections.countDocuments(filter)
    },

    async createdComment(newComment: any){
        await commentCollections.insertOne(newComment)
    },

    async changeComment(filter: { id: string }, updateComment: { $set: CommentResponseType }) {
        const result = await commentCollections.updateOne(filter, updateComment)
        return result.matchedCount === 1
    },

    async deleteComment(filter: { id: string }) {
        const result = await commentCollections.deleteOne(filter)
        return result.deletedCount === 1
    }
}