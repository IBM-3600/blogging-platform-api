import UserRepository from '../repo/UserRepository';
import User from '../Entities/user';
import { IService } from './iService';

export default class UserService implements IService<User> {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepository();
    }
    async create(data: User) {
        return await this.userRepository.create(data);
    }
    async createMany(data: User[]) {
        return await this.userRepository.createMany(data);
    }
    async findBy(field: string, value: any): Promise<User | null> {
        return await this.userRepository.findBy(field, value);
    }
    async find(id: string) {
        return await this.userRepository.find(id);
    }
    
    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }
    async updateById(id: string, data: User): Promise<User> {
        const existingUser = await this.userRepository.find(id);
        if (!existingUser) {
            throw new Error(`User with id ${id} not found`);
        }
        const updatedUser = { ...existingUser, ...data };
        return await this.userRepository.update(updatedUser);
    }
    async update(data: User) {
        return await this.userRepository.update(data);
    }

    async delete(id: string): Promise<string | null> {
        return await this.userRepository.remove(id);
    }
}