require('dotenv').config();
const cron = require('node-cron');
import * as moment from 'moment';
import { Connection, MoreThan, Repository, Between } from 'typeorm';
import { getConnectionBySystemId } from './orm';
import { Account } from './entity/Account';
import { marumeAdits, calcAttendance } from './utils';
import { Adit, Status, StatusAgreegate } from './entity/Adit';
import { Config } from './entity/Config';
import { Attendance } from './entity/Attendance';

getConnectionBySystemId('kintai').then(conMaster => {
  setupSchedules(conMaster);
});

const setupSchedules = (conMaster: Connection) => {
  // # ┌────────────── second (optional)
  // # │ ┌──────────── minute
  // # │ │ ┌────────── hour
  // # │ │ │ ┌──────── day of month
  // # │ │ │ │ ┌────── month
  // # │ │ │ │ │ ┌──── day of week
  // # * * * * * *
  cron.schedule('0 * * * * *', async () => {
    // create new tenant
    // console.log('running a task every minute');
    const list = await getAccountList(conMaster, {
      created: MoreThan(
        moment()
          .add(-5, 'minutes')
          .format('YYYY-MM-DD HH:mm:ss')
      )
    });
    for (const val of list) {
      try {
        const con = await getConnectionBySystemId('kintai_' + val.systemId);
        console.log('ok: ' + val.systemId);
      } catch (e) {
        await createDatabase(conMaster, val.systemId);
      }
    }
  });

  cron.schedule('10 * * * * *', async () => {
    // console.log('running a task every minute');
    const list = await getAccountList(conMaster, {});
    for (const val of list) {
      try {
        const con = await getConnectionBySystemId('kintai_' + val.systemId);
        console.log('start marume: ' + val.systemId);
        const configs = await getConfigList(con, {});
        const adits = await getAditList(con, {
          status: Status.未処理
        });
        const listMarumed = await marumeAdits(adits, configs);
        for (const adit of listMarumed) {
          await saveAdit(con, adit);
        }
      } catch (e) {
        console.error(e);
      }
    }
  });

  cron.schedule('20 * * * * *', async () => {
    // console.log('running a task every minute');
    const list = await getAccountList(conMaster, {});
    for (const val of list) {
      try {
        const con = await getConnectionBySystemId('kintai_' + val.systemId);
        const aditRepo = con.getRepository('Adit') as Repository<Adit>;
        console.log('start calcAttendance: ' + val.systemId);
        const configs = await getConfigList(con, {});
        const adits = await getAditList(con, {
          statusAgreegate: StatusAgreegate.未集計
        });
        const processed: any = []; // employeeId@date
        for (const adit of adits) {
          const processedKey =
            '' +
            adit.employeeId +
            '@' +
            moment(adit.aditAt).format('YYYY-MM-DD');
          if (processed[processedKey]) {
            continue;
          }
          const addList = [0, 1, 1, 2];
          const [from1, to1, from2, to2] = getDateAdded(adit.aditAt, addList);
          const aditsByDateAndEmployee = await aditRepo
            .createQueryBuilder('adit')
            .where('adit.employeeId = :id', { id: adit.employeeId })
            .andWhere(
              '(adit.aditAt between :from1 and :to1 AND adit.isOvernight = 0) OR (adit.aditAt between :from2 and :to2 AND adit.isOvernight = 1)',
              { from1, to1, from2, to2 }
            )
            .getMany();
          let attendance = await getAttendance(con, {
            employeeId: adit.employeeId,
            date: moment(adit.aditAt).format('YYYY-MM-DD')
          });
          if (aditsByDateAndEmployee.length > 0) {
            if (attendance === undefined) {
              attendance = new Attendance();
              attendance.employeeId = aditsByDateAndEmployee[0].employeeId;
            }
            attendance = calcAttendance(
              aditsByDateAndEmployee,
              attendance,
              configs
            );
            await saveAttendance(con, attendance);
            for (const a of aditsByDateAndEmployee) {
              a.statusAgreegate = StatusAgreegate.集計済み;
              await saveAdit(con, a);
            }
            processed[processedKey] = true;
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  });
};

const createDatabase = (conMaster: Connection, dbname: string) => {
  return conMaster.query('CREATE DATABASE kintai_' + dbname).then(
    result => {
      return getConnectionBySystemId('kintai_' + dbname);
    },
    err => {
      console.error(err);
    }
  );
};

const getDateAdded = (base: Date, list: number[]) => {
  return list.map(v => {
    return moment(base)
      .add(v, 'days')
      .format('YYYY-MM-DD 00:00:00');
  });
};

const saveAttendance = (con: Connection, item: Attendance) => {
  const repo = con.getRepository('Attendance') as Repository<Attendance>;
  return repo.save(item);
};

const getAttendance = (con: Connection, param: any) => {
  const repo = con.getRepository('Attendance') as Repository<Attendance>;
  return repo.findOne(param);
};

const getAttendanceList = (con: Connection, param: any) => {
  const repo = con.getRepository('Attendance') as Repository<Attendance>;
  return repo.find(param);
};

const saveAdit = (con: Connection, item: Adit) => {
  const repo = con.getRepository('Adit') as Repository<Adit>;
  return repo.save(item);
};

const getAditList = (con: Connection, param: any) => {
  const repo = con.getRepository('Adit') as Repository<Adit>;
  return repo.find(param);
};

const getConfigList = (con: Connection, param: any) => {
  const repo = con.getRepository('Config') as Repository<Config>;
  return repo.find(param);
};

const getAccountList = (con: Connection, param: any) => {
  const repo = con.getRepository('Account') as Repository<Account>;
  return repo.find(param);
};
