import Post from "../Entities/post";
import { BlogRepository } from "../repo/blogRepository";
import { IService } from "./iService";

export class BlogService implements IService<Post> {
    private blogRepository: BlogRepository;

    constructor() {
        this.blogRepository = new BlogRepository();
    }

    async create(data: Post) {
        return this.blogRepository.create(data);
    }

    async createMany(data: Post[]): Promise<Post[]> {
        return await this.blogRepository.createMany(data);
    }

    async find(id: string) {
        return await this.blogRepository.find(id);
    }

    async findAll() {
        return this.blogRepository.findAll();
    }

    async updateById(id: string, data: Post) {
        return this.blogRepository.update(data);
    }
    async update(data: Post) {
        return this.blogRepository.update(data);
    }
    async delete(id: string): Promise<string | null> {
        return this.blogRepository.delete(id);
    }

    async findBy(field: string, value: any) {
        return this.blogRepository.findBy(field, value);
    }

    async findOne(field: string, value: any) {
        return this.blogRepository.findOne(field, value);
    }

    async findAllBy(field: string, value: any) {
        return this.blogRepository.findAllBy(field, value);
    }

    async removeById(id: string) {
        return this.blogRepository.delete(id);
    }
}
