const { getUserId } = require('../../utils');

import { OverworkAppried } from '../../entity/OverworkAppried';

export const overworkAppried = {
  async createOverworkAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new OverworkAppried();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('OverworkAppried').save(item);
  },

  async updateOverworkAppried(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('OverworkAppried').findOne(id) as OverworkAppried;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('OverworkAppried').save(item);
  }
};
