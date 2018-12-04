const { getUserId } = require('../../utils');
const bcrypt = require('bcryptjs');

import { Account } from '../../entity/Account';

export const account = {
  async createAccount(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new Account();
    Object.keys(args.input).forEach(
      key => (args.input[key] !== null ? (item[key] = args.input[key]) : '')
    );
    item.password = await bcrypt.hash(args.input.password, 10);
    return ctx.conMaster.getRepository('Account').save(item);
  },

  async updateAccount(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = (await ctx.conMaster
      .getRepository('Account')
      .findOne(id)) as Account;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(
        key => (args.input[key] !== null ? (item[key] = args.input[key]) : '')
      );
    if (args.input.password) {
      item.password = await bcrypt.hash(args.input.password, 10);
    }
    return ctx.conMaster.getRepository('Account').save(item);
  }
};
