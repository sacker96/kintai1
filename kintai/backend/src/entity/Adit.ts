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

export enum Types {
  '処理中' = '処理中',
  '入室' = '入室',
  '退室' = '退室',
  '入室(自動)' = '入室(自動)',
  '退室(自動)' = '退室(自動)'
}

export enum Methods {
  'web' = 'web',
  'felica' = 'felica',
  '自動打刻' = '自動打刻'
}

export enum Status {
  '未処理' = '未処理',
  '処理済み' = '処理済み',
  '未承認' = '未承認',
  '修正済み' = '修正済み',
}

export enum StatusAgreegate {
  '未集計' = '未集計',
  '集計済み' = '集計済み',
}

@Entity()
export class Adit {
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
  @ManyToOne(type => Employee, employee => employee.adits)
  employee: Employee;
  @Column('enum', { enum: Types })
  type: Types = Types.処理中;
  @Column('enum', { enum: Methods })
  method: Methods = Methods.自動打刻;
  @Column()
  aditAt: Date = new Date();
  @Column('text')
  notice = '';
  @Column('enum', { enum: Status })
  @Index()
  status: Status = Status.未処理;
  @Column('enum', { enum: StatusAgreegate })
  @Index()
  statusAgreegate: StatusAgreegate = StatusAgreegate.未集計;
  @Column()
  isOvernight: boolean = false;
  @Column('longtext')
  history = '';
}
