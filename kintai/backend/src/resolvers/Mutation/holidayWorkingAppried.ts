const { getUserId } = require('../../utils');

import { HolidayWorkingAppried } from '../../entity/HolidayWorkingAppried';

export const holidayWorkingAppried = {
  async createHolidayWorkingAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new HolidayWorkingAppried();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('HolidayWorkingAppried').save(item);
  },

  async updateHolidayWorkingAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('HolidayWorkingAppried').findOne(id) as HolidayWorkingAppried;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('HolidayWorkingAppried').save(item);
  }
};
