const { getUserId } = require('../../utils');

import { Closing } from '../../entity/Closing';

export const closing = {
  async createClosing(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new Closing();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('Closing').save(item);
  },

  async updateClosing(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('Closing').findOne(id) as Closing;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('Closing').save(item);
  }
};
