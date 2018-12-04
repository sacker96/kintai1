import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  PrimaryColumn
} from 'typeorm';

enum readTypes {
  'config' = 'config'
}

@Entity()
export class Config {
  @PrimaryColumn()
  name: string;
  @UpdateDateColumn()
  updated: Date;
  @VersionColumn()
  version: number;

  @Column('enum', { enum: readTypes })
  readType: readTypes = readTypes.config;
  @Column()
  val1: string = '';
  @Column()
  val2: string = '';
  @Column()
  val3: string = '';
  @Column()
  num1: number = 0;
  @Column()
  num2: number = 0;
  @Column()
  num3: number = 0;
  @Column('text')
  extra: string = '';
}
