
export interface IService<T> {
    find: (id: string) => Promise<T | null>;
    findAll: () => Promise<T[]>;
    create: (data: T) => Promise<T>;
    createMany: (data: T[]) => Promise<T[]>;
    update: (data: T) => Promise<T>;
    updateById: (id: string, data: T) => Promise<T>;
    delete: (id: string) => Promise<string | null>;
    findBy: (field: string, value: any) => Promise<T | null>;

}