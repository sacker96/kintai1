const { getUserId } = require('../../utils');

import { Attendance } from '../../entity/Attendance';

export const attendance = {
  async createAttendance(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new Attendance();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('Attendance').save(item);
  },

  async updateAttendance(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('Attendance').findOne(id) as Attendance;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('Attendance').save(item);
  }
};
