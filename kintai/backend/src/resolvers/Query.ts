import { Account } from '../entity/Account';
import { Adit } from '../entity/Adit';
import { Attendance } from '../entity/Attendance';
import { Closing } from '../entity/Closing';
import { Config } from '../entity/Config';
import { Employee } from '../entity/Employee';
import { EmployeeHoliday } from '../entity/EmployeeHoliday';
import { Holiday } from '../entity/Holiday';
import { HolidayAppried } from '../entity/HolidayAppried';
import { HolidayWorkingAppried } from '../entity/HolidayWorkingAppried';
import { Message } from '../entity/Message';
import { OverworkAppried } from '../entity/OverworkAppried';
import { Between } from 'typeorm';

const { getUserId } = require('../utils');

export const Query = {
  async accounts(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.conMaster.getRepository(Account).find({});
  },
  async account(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const systemId = args.systemId;
    return ctx.conMaster.getRepository(Account).findOne({ systemId });
  },
  async adits(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(Adit).find({});
  },
  async adit(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(Adit).findOne(id);
  },
  async aditsByDate(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    let where: any = {
      aditAt: Between(args.date + ' 00:00:00', args.date + ' 23:59:59')
    };
    if (ctx.jwtObject.role === 'employee') {
      where = {
        aditAt: Between(args.date + ' 00:00:00', args.date + ' 23:59:59'),
        employeeId: userId
      };
    }
    const order = {
      id: 'ASC'
    };
    return ctx.con.getRepository(Adit).find({where, order});
  },
  async attendances(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const where: any = {};
    if (ctx.jwtObject.role === 'employee') {
      where.employeeId = userId;
    } else {
      where.employeeId = args.employeeId;
    }
    where.date = Between(args.from, args.to);
    let list = await ctx.con.getRepository(Attendance).find({where});
    console.log(list);
    return ctx.con.getRepository(Attendance).find({where});
  },
  async attendance(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(Attendance).findOne(id);
  },
  async closings(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(Closing).find({});
  },
  async closing(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(Closing).findOne(id);
  },
  async configs(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(Config).find({});
  },
  async config(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(Config).findOne(id);
  },
  async employees(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(Employee).find({});
  },
  async employee(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(Employee).findOne(id);
  },
  async employeeHolidays(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(EmployeeHoliday).find({});
  },
  async employeeHoliday(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(EmployeeHoliday).findOne(id);
  },
  async holidays(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(Holiday).find({});
  },
  async holiday(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(Holiday).findOne(id);
  },
  async holidayApprieds(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(HolidayAppried).find({});
  },
  async holidayAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(HolidayAppried).findOne(id);
  },
  async holidayWorkingApprieds(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(HolidayWorkingAppried).find({});
  },
  async holidayWorkingAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(HolidayWorkingAppried).findOne(id);
  },
  async messages(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(Message).find({});
  },
  async message(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(Message).findOne(id);
  },
  async overworkApprieds(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository(OverworkAppried).find({});
  },
  async overworkAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const id = args.id;
    return ctx.con.getRepository(OverworkAppried).findOne(id);
  },

  me(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return ctx.con.getRepository('Employee').findOne(userId);
  }
};
