const { getUserId } = require('../../utils');

import { EmployeeHoliday } from '../../entity/EmployeeHoliday';

export const employeeHoliday = {
  async createEmployeeHoliday(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new EmployeeHoliday();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('EmployeeHoliday').save(item);
  },

  async updateEmployeeHoliday(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('EmployeeHoliday').findOne(id) as EmployeeHoliday;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('EmployeeHoliday').save(item);
  }
};
