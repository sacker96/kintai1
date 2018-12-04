const { getUserId } = require('../../utils');

import { Config } from '../../entity/Config';

export const config = {
  async updateConfig(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    const list = args.input.map((v: Config) => {
      const item = new Config();
      item.name = v.name;
      item.readType = v.readType;
      item.val1 = v.val1 || '';
      item.val2 = v.val2 || '';
      item.val3 = v.val3 || '';
      item.num1 = v.num1 || 0;
      item.num2 = v.num2 || 0;
      item.num3 = v.num3 || 0;
      item.extra = v.extra || '';
      return item;
    });
    await ctx.con.transaction(async (transactionalEntityManager:any) => {
      for(let item of list) {
        await transactionalEntityManager.save(item);
      }
    });
    return {name: 'done'};
  }
};
