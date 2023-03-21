export declare global { //расширяю тип  Request
    declare namespace Express {
        export interface Request {
            content: { postId: string } // postID - как пример
        }
    }
}