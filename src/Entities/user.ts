import {ObjectId } from 'mongodb';
import { id } from 'mongodb-typescript';

export default class User{
   @id id: ObjectId;
    name: string;
    email: string;
    age?: number;
    password: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: ObjectId,
        name: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
        age?: number
        ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        }
}