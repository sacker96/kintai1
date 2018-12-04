import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  ManyToOne
} from 'typeorm';
import { Employee } from './Employee';

enum Status {
  '未処理' = '未処理',
  '処理済み' = '処理済み',
  '未承認' = '未承認'
}

@Entity()
export class OverworkAppried {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @VersionColumn()
  version: number;

  @ManyToOne(type => Employee, employee => employee.overworkApprieds)
  employee: Employee;
  @Column('date')
  date: Date = new Date();
  @Column('time')
  start = '';
  @Column('time')
  end = '';
  @Column('text')
  message = '';
  @Column('enum', { enum: Status })
  status: Status = Status.未処理;
}
