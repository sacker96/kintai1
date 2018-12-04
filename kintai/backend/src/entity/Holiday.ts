import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  OneToMany
} from 'typeorm';
import { HolidayWorkingAppried } from './HolidayWorkingAppried';
import { EmployeeHoliday } from './EmployeeHoliday';
import { HolidayAppried } from './HolidayAppried';

@Entity()
export class Holiday {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @VersionColumn()
  version: number;

  @Column()
  name: string = '';
  @Column()
  short: string = '';
  @Column()
  amount: number = 0;
  @Column()
  holiday_type: string = '';
  @Column()
  paid_type: string = '';
  @Column()
  range: string = '';
  @Column()
  compensatory_term_from: string = '';
  @Column()
  limit_mode_from: string = '';
  @Column()
  compensatory_term: string = '';
  @Column()
  limitmode: string = '';

  @OneToMany(
    type => HolidayWorkingAppried,
    holidayWorkingAppried => holidayWorkingAppried.holiday
  )
  holidayWorkingApprieds: HolidayWorkingAppried;
  @OneToMany(
    type => EmployeeHoliday,
    employeeHoliday => employeeHoliday.holiday
  )
  employeeHolidays: EmployeeHoliday;
  @OneToMany(type => HolidayAppried, holidayAppried => holidayAppried.holiday)
  holidayApprieds: HolidayAppried;
}
