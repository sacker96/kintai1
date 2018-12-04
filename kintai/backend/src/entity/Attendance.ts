import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  ManyToOne,
  Index
} from 'typeorm';
import { Employee } from './Employee';

export enum Status {
  '未処理' = '未処理',
  '処理済み' = '処理済み',
  '未承認' = '未承認'
}

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @VersionColumn()
  version: number;

  @Column({ nullable: true })
  employeeId: number;
  @ManyToOne(type => Employee, employee => employee.attendances)
  employee: Employee;
  @Column('enum', { enum: Status })
  status: Status = Status.未承認;
  @Column('date')
  @Index()
  date: string = '';
  @Column()
  holiday: string = '';
  @Column('text')
  free_note: string = '';
  @Column('time')
  start: string = '';
  @Column({ type:'time', nullable: true})
  end: string | null = null;
  @Column()
  work: number = 0;
  @Column()
  rest: number = 0;
  @Column()
  overwork: number = 0;
  @Column()
  nighttime: number = 0;
}
