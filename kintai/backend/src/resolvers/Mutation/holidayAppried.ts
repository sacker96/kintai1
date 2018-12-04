const { getUserId } = require('../../utils');

import { HolidayAppried } from '../../entity/HolidayAppried';

export const holidayAppried = {
  async createHolidayAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new HolidayAppried();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('HolidayAppried').save(item);
  },

  async updateHolidayAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('HolidayAppried').findOne(id) as HolidayAppried;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('HolidayAppried').save(item);
  }
};
