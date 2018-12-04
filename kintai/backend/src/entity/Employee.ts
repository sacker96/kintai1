import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  Index,
  OneToMany
} from 'typeorm';
import { EmployeeHoliday } from './EmployeeHoliday';
import { Adit } from './Adit';
import { Attendance } from './Attendance';
import { HolidayAppried } from './HolidayAppried';
import { HolidayWorkingAppried } from './HolidayWorkingAppried';
import { OverworkAppried } from './OverworkAppried';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @VersionColumn()
  version: number;

  @Column()
  lname: string = '';
  @Column()
  fname: string = '';
  @Column({
    unique: true
  })
  email: string = '';
  @Column()
  tel: string = '';
  @Column('date')
  birth: Date = new Date();
  @Column({
    unique: true
  })
  employee_code: string = '';
  @Column()
  password: string = '';
  @Column()
  salary: string = '';
  @Column()
  transportation: string = '';
  @Index()
  @Column('date')
  enter: Date = new Date();
  @Index()
  @Column('date')
  leave: Date = new Date();
  @Column('text')
  free_note: string = '';
  @Column('text')
  free_note_2: string = '';
  @Column('text')
  free_note_3: string = '';
  @Index()
  @Column()
  tags: string = '';
  @Index()
  @Column()
  felica: string = '';

  @OneToMany(type => Adit, adit => adit.employee)
  adits: Adit[];
  @OneToMany(type => Attendance, attendance => attendance.employee)
  attendances: Attendance[];
  @OneToMany(
    type => EmployeeHoliday,
    employeeHoliday => employeeHoliday.employee
  )
  employeeHolidays: EmployeeHoliday[];
  @OneToMany(type => HolidayAppried, holidayAppried => holidayAppried.employee)
  holidayApprieds: HolidayAppried[];
  @OneToMany(
    type => HolidayWorkingAppried,
    holidayWorkingAppried => holidayWorkingAppried.employee
  )
  holidayWorkingApprieds: HolidayWorkingAppried[];
  @OneToMany(
    type => OverworkAppried,
    OverworkAppried => OverworkAppried.employee
  )
  overworkApprieds: OverworkAppried[];
}
