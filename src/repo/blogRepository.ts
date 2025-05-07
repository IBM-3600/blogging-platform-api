import Post from "../Entities/post";
import Database from "../db";
import { IRepository } from "./iRepository";
import { ObjectId } from "mongodb";

export class BlogRepository implements IRepository<Post> {
    private postDB: any;

    constructor() {
        this.postDB = Database.getInstance().getPostDB();
    }
    
    async create(data: Post) {
        this.postDB.insert(data);
        return data;
    }
    
    async createMany(data: Post[]): Promise<Post[]> {
        data.map((user) => {
            this.postDB.insert(user);
        });
        return data;
    }
    
    async find(id: string) {
        return this.postDB.findById(new ObjectId(id));
    }

    async findAll() {
        return this.postDB.find({}).toArray();
    }

    async update(data: Post) {
        return this.postDB.update(data);
    }

    async updateById(id: string, data: Post): Promise<Post> {
        return this.postDB.update(data);
    }

    async findBy(field: string, value: any) {
        return this.postDB.find({ [field]: value }).toArray();
    }

    async findOne(field: string, value: any) {
        return this.postDB.findOne({ [field]: value });
    }

    async findAllBy(field: string, value: any) {
        return this.postDB.find({ [field]: value }).toArray();
    }

    async delete(id: string): Promise<string | null> {
        const result = await this.postDB.deleteOne({ _id: id });
        return result.deletedCount ? id : null;
    };
}