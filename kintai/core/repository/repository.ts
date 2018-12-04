export interface Read<T> {
  find(item: T): Promise<T[]>;
  findOne(id: string): Promise<T>;
}

export interface Write<T> {
  create(item: T): Promise<boolean>;
  update(item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export interface Repository<T> extends Read<T>, Write<T> {
  create(item: T): Promise<boolean>;
  update(item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  find(searchParam: any): Promise<T[]>;
  findOne(id: string): Promise<T>;
}
