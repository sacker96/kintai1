import { Account } from '../../entity/Account';
import { Employee } from '../../entity/Employee';
import { getConnectionBySystemId } from '../../orm';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const auth = {
  async login(parent: any, args: any, ctx: any, info: any) {
    const { systemId, email, password } = args;
    const role = 'employee';

    let user;

    if (email === 'admin') {
      user = await ctx.conMaster
        .getRepository('Account')
        .findOne({ systemId });
      if (!user) {
        throw new Error(`No such user found for ${systemId}/${email}`);
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Invalid password');
      }
    } else {
      ctx.con = await getConnectionBySystemId('kintai_' + systemId);
      user = await ctx.con
        .getRepository('Employee')
        .findOne({ email });
      if (!user) {
        user = await ctx.con
          .getRepository('Employee')
          .findOne({ employee_code: email });
      }
      if (!user) {
        throw new Error(`No such user found for ${systemId}/${email}`);
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Invalid password');
      }
    }

    return {
      token: jwt.sign({ systemId, role, userId: user.id }, process.env.APP_SECRET, {
        expiresIn: '1h'
      }),
      systemId
    };
  },

  async adminlogin(parent: any, args: any, ctx: any, info: any) {
    const { systemId, email, password } = args;
    const role = 'admin';

    if (email !== 'admin') {
      throw new Error(`No such user found for ${systemId}/${email}`);
    }

    const user: Account = await ctx.conMaster
      .getRepository('Account')
      .findOne({ systemId });
    if (!user) {
      throw new Error(`No such user found for ${systemId}/${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    return {
      token: jwt.sign({ systemId, role, userId: user.id }, process.env.APP_SECRET, {
        expiresIn: '1h'
      }),
      systemId
    };
  },

  async masterlogin(parent: any, args: any, ctx: any, info: any) {
    const { email, password } = args;
    const role = 'master';

    if (
      email === process.env.MASTER_ID &&
      password === process.env.MASTER_PASSWORD
    ) {
      return {
        token: jwt.sign({ systemId: 'master', role, userId: email }, process.env.APP_SECRET, {
          expiresIn: '1h'
        }),
        systemId: 'master'
      };
    }
    throw new Error('Invalid password');
  },

  async refresh(parent: any, args: any, ctx: any, info: any) {
    const { jwtObject } = ctx;
    delete jwtObject.iat;
    delete jwtObject.exp;
    return {
      token: jwt.sign(jwtObject, process.env.APP_SECRET, {
        expiresIn: '1h'
      }),
      systemId: jwtObject.systemId
    };
  }
};
