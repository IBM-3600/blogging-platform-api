import Database from '../db';
import User from '../Entities/user';
import { ObjectId } from 'mongodb';
export default class UserRepository {
    private userDB: any;

    constructor() {
        this.userDB = Database.getInstance().getUserDB();
    }

    async create(data: User) {
        return this.userDB.insert(data);;
    }

    async createMany(data: User[]) {
        data.map((user) => {
            this.userDB.insert(user);
        });
        return data;
    }

    async find(id: string) {
        return this.userDB.findById(new ObjectId(id));
    }

    async findBy(field: string, value: any) {
        return this.userDB.find((res:Object)=>{
            Object.entries(res).forEach(([key, val]) => {
                if (key === field && val === value) {
                    return res;
                }
            });
        }).toArray();
    }

    async findOne(field: string, value: any) {
        return this.userDB.findOne({ [field]: value });
    }

    async findAll() {
        return this.userDB.find({}).toArray();
    }

    async update(data: User) {
        return this.userDB.update(data);
    }

    async remove(id: string) {
        console.log(`id:${id}`);
        let result = await this.find(id);
        await this.userDB.remove(result);
        return id;
    }
}