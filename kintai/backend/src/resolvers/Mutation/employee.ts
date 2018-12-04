const { getUserId } = require('../../utils');
const bcrypt = require('bcryptjs');

import { Employee } from '../../entity/Employee';

export const employee = {
  async createEmployee(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new Employee();
    Object.keys(args.input).forEach(key => (item[key] = args.input[key]));
    item.password = await bcrypt.hash(args.input.password, 10);
    return ctx.con.getRepository('Employee').save(item);
  },

  async updateEmployee(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = (await ctx.con
      .getRepository('Employee')
      .findOne(id)) as Employee;
    Object.keys(args.input)
      .filter(key => key !== 'id')
      .forEach(key => (item[key] = args.input[key]));
    if (args.input.password) {
      item.password = await bcrypt.hash(args.input.password, 10);
    }
    return ctx.con.getRepository('Employee').save(item);
  }
};
