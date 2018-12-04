const { getUserId } = require('../../utils');

import { Message } from '../../entity/Message';

export const message = {
  async createMessage(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new Message();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('Message').save(item);
  },

  async updateMessage(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('Message').findOne(id) as Message;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    return ctx.con.getRepository('Message').save(item);
  }
};
