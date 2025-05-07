import { id } from "mongodb-typescript";
import { ObjectId } from "bson";

export default class Post {
 @id id: ObjectId;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
         id: ObjectId,
        title: string,
        content: string,
        authorId: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    
}