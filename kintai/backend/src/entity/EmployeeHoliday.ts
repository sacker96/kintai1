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

@Entity()
export class EmployeeHoliday {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @VersionColumn()
  version: number;

  @ManyToOne(type => Employee, employee => employee.employeeHolidays)
  employee: Employee;
  @ManyToOne(type => Holiday, holiday => holiday.employeeHolidays)
  holiday: Holiday;
  @Column()
  start: Date = new Date();
  @Column()
  end: Date = new Date();
  @Column()
  num: number = 0;
}
