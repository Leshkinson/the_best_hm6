import {UserResponseFromDBType} from "./types";

export declare global { //расширяю тип  Request
    declare namespace Express {
        export interface Request {
            content: {
                user: UserResponseFromDBType | null,
            } // postID - как пример
        }
    }
}