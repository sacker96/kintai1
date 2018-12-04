import { Between, FindManyOptions } from 'typeorm';
import * as moment from 'moment';

import { Adit, Types as AditTypes, Status as AditStatus } from './entity/Adit';
import { Config } from './entity/Config';
import { Attendance, Status as AttendanceStatus } from './entity/Attendance';
import { defaultSeed } from './orm';

const jwt = require('jsonwebtoken');

export const calcAttendance = (
  list: Adit[],
  attendance: Attendance,
  configs: Config[]
): Attendance => {
  if (list.length == 0) { throw new Error('calcAttendance: adit list length = 0'); }
  attendance.status = AttendanceStatus.処理済み;
  attendance.date = moment(list[0].aditAt).format('YYYY-MM-DD');

  const pair: Adit[][] = [];
  list.forEach((val, idx) => {
    if (attendance.employeeId !== val.employeeId) {
      throw new Error('calcAttendance: employee id is not equal');
    }
    if (attendance.date !== moment(val.aditAt).format('YYYY-MM-DD')) {
      throw new Error('calcAttendance: date is not dqual');
    }
    switch (val.type) {
      case AditTypes.入室:
      case AditTypes['入室(自動)']:
        pair.push([val]);
        break;
      case AditTypes.退室:
      case AditTypes['退室(自動)']:
        const p = pair.pop();
        if (p !== undefined) {
          p[1] = val;
          pair.push(p);
        }
        break;
      default:
        return;
    }
    if (val.status === AditStatus.未承認) {
      attendance.status = AttendanceStatus.未承認;
    }
  });

  attendance.rest = 0;
  attendance.work = 0;
  pair.forEach(p => {
    if (attendance.start === '') {
      attendance.start = moment(p[0].aditAt).format('HH:mm:ss');
    }
    if (attendance.end !== null) {
      const ms = moment(p[0].aditAt).diff(
        moment(attendance.date + ' ' + attendance.end, 'YYYY-MM-DD HH:mm:ss')
      );
      const d = moment.duration(ms);
      attendance.rest += d.asMinutes();
    }
    if (p[1]) {
      attendance.end = moment(p[1].aditAt).format('HH:mm:ss');
      const ms = moment(p[1].aditAt).diff(moment(p[0].aditAt));
      const d = moment.duration(ms);
      attendance.work += d.asMinutes();
    } else {
      attendance.end = null;
    }
  });
  return attendance;
};

export const getAditsByEmployee = (list: Adit[]) => {
  return list
    .map(v => v.employeeId)
    .filter((v, i, self) => self.indexOf(v) === i)
    .map(id => {
      return list.filter(v => v.employeeId === id);
    });
};

export const getConfigVal1 = (configs: Config[], name: string, def: any) => {
  const conf = configs.find(v => v.name === name);
  if (conf) {
    return conf.val1;
  } else {
    const conf = defaultSeed.config.find(v => v.name === name);
    if (conf) {
      return conf.val1;
    }
  }
  return def;
};

export const marumeAdits = async (list: Adit[], configs: Config[]) => {
  return Promise.all(
    list.map(async adit => {
      const a = Object.assign(new Adit(), adit);
      switch (a.type) {
        case AditTypes.入室: {
          const round = getConfigVal1(configs, 'day_begin_round_unit', 1);
          const coeff = 1000 * 60 * round;
          a.aditAt = new Date(Math.ceil(a.created.getTime() / coeff) * coeff);
          break;
        }
        case AditTypes.退室: {
          const round = getConfigVal1(configs, 'day_end_round_unit', 1);
          const coeff = 1000 * 60 * round;
          a.aditAt = new Date(Math.floor(a.created.getTime() / coeff) * coeff);
          break;
        }
      }
      a.status = AditStatus.処理済み;
      return a;
    })
  );
};

export const getNextAditType = async (aditRepository: any, adit: Adit) => {
  const date = moment(adit.aditAt).format('Y/M/DD');
  const param: FindManyOptions<Adit> = {
    where: {
      employeeId: adit.employeeId,
      aditAt: Between(date + ' 00:00:00', date + ' 23:59:59')
    },
    order: {
      id: 'ASC'
    }
  };
  const list = await aditRepository.find(param);
  if (list.length % 2 == 1) {
    return AditTypes.退室;
  } else if (list.length % 2 == 0) {
    return AditTypes.入室;
  }
  return AditTypes.処理中;
};

export const getUserId = (ctx: any) => {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new AuthError();
};

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}
