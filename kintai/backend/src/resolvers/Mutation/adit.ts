import { Adit, Methods } from '../../entity/Adit';
import { getUserId, getNextAditType } from '../../utils';

export const adit = {
  async createAdit(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const item = new Adit();
    item.method = Methods.web;
    item.notice = args.input.notice || '';
    item.employeeId = userId;
    item.type = await getNextAditType(ctx.con.getRepository('Adit'), item);
    return ctx.con.getRepository('Adit').save(item);
  },

  async updateAdit(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const { id } = args.input;
    const item = await ctx.con.getRepository('Adit').findOne(id) as Adit;
    return ctx.con.getRepository('Adit').save(item);
  },

  async createAditByFelica(parent: any, args: any, ctx: any, info: any) {
    // const userId = getUserId(ctx);
    const employee = await ctx.con.getRepository('Employee').findOne({felica: args.felica});
    if (!employee) throw new Error('Employee not found');

    const item = new Adit();
    item.method = Methods.felica;
    // item.notice = args.input.notice || '';
    item.employeeId = employee.id;
    item.type = await getNextAditType(ctx.con.getRepository('Adit'), item);
    return ctx.con.getRepository('Adit').save(item);
  }
};
