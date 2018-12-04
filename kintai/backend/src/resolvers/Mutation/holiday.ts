const { getUserId } = require('../../utils');

import { Holiday } from '../../entity/Holiday';

export const holiday = {
  async createHoliday(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new Holiday();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('Holiday').save(item);
  },

  async updateHoliday(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('Holiday').findOne(id) as Holiday;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('Holiday').save(item);
  }
};
