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
import { Holiday } from './Holiday';

enum Status {
  '未処理' = '未処理',
  '処理済み' = '処理済み',
  '未承認' = '未承認'
}

@Entity()
export class HolidayWorkingAppried {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @VersionColumn()
  version: number;

  @ManyToOne(type => Employee, employee => employee.holidayWorkingApprieds)
  employee: Employee;
  @Column('date')
  date: Date = new Date();
  @ManyToOne(type => Holiday, holiday => holiday.holidayWorkingApprieds)
  holiday: Holiday;
  @Column('text')
  message = '';
  @Column('enum', { enum: Status })
  status: Status = Status.未処理;
}
