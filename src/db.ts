import { id, Repository } from 'mongodb-typescript';
import { MongoClient } from 'mongodb';
import User from './Entities/user';
import Post from './Entities/post';
import dotenv from 'dotenv';
dotenv.config();

export default class Database {
    private static instance: Database;
    private userDB: Repository<User>;
    private postDB: Repository<Post>;
    private url: string = process.env.MONGO_URI || 'your_connection_string';

    private constructor() {
        const mongoClient = new MongoClient(this.url);
        this.userDB = new Repository<User>(User, mongoClient, 'users');
        this.postDB = new Repository<Post>(Post, mongoClient, 'posts');
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public connect() {
        console.log("Database connected");
    }

    public getUserDB() {
        return this.userDB;
    }

    public getPostDB() {
        return this.postDB;
    }

    public close() {
        console.log("Database connection closed");
    }
}