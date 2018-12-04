import * as moment from 'moment';

import { getNextAditType, marumeAdits, calcAttendance, getAditsByEmployee } from '../src/utils';
import { Adit, Status as AditStatus, Types } from '../src/entity/Adit';
import { Employee } from '../src/entity/Employee';
import { Attendance, Status as AttendanceStatus } from '../src/entity/Attendance';

describe('utils', () => {

  describe('calcAttendance', () => {
    let configs;
    let attendance;
    let e1;
    beforeEach(() => {
      configs = [];
      e1 = new Employee();
      e1.id = 1;
      attendance = new Attendance();
      attendance.employeeId = e1.id;
    });
    it('入室だけなら終了時間はnull', async () => {
      const a = new Adit();
      a.employeeId = e1.id;
      a.status = AditStatus.処理済み;
      a.type = Types.入室;
      a.aditAt = moment('2018-10-31 09:00:00').toDate();
      const list = [a];
      attendance = calcAttendance(list, attendance, configs);
      expect(attendance.employeeId).toBe(1);
      expect(attendance.status).toBe(AttendanceStatus.処理済み);
      expect(attendance.date).toBe('2018-10-31');
      expect(attendance.start).toBe('09:00:00');
      expect(attendance.end).toBe(null);
      expect(attendance.work).toBe(0);
      expect(attendance.rest).toBe(0);
      expect(attendance.overwork).toBe(0);
      expect(attendance.nighttime).toBe(0);
    });
    it('退室まであるときは時間計算', async () => {
      const a = new Adit();
      a.employeeId = e1.id;
      a.status = AditStatus.処理済み;
      a.type = Types.入室;
      a.aditAt = moment('2018-10-31 09:00:00').toDate();
      const b = new Adit();
      b.employeeId = e1.id;
      b.status = AditStatus.処理済み;
      b.type = Types.退室;
      b.aditAt = moment('2018-10-31 10:00:00').toDate();
      const list = [a, b];
      attendance = calcAttendance(list, attendance, configs);
      expect(attendance.employeeId).toBe(1);
      expect(attendance.status).toBe(AttendanceStatus.処理済み);
      expect(attendance.date).toBe('2018-10-31');
      expect(attendance.start).toBe('09:00:00');
      expect(attendance.end).toBe('10:00:00');
      expect(attendance.work).toBe(60);
      expect(attendance.rest).toBe(0);
      expect(attendance.overwork).toBe(0);
      expect(attendance.nighttime).toBe(0);
    });
    it('再入室した際は終了時間はnull', async () => {
      const a = new Adit();
      a.employeeId = e1.id;
      a.status = AditStatus.処理済み;
      a.type = Types.入室;
      a.aditAt = moment('2018-10-31 09:00:00').toDate();
      const b = new Adit();
      b.employeeId = e1.id;
      b.status = AditStatus.処理済み;
      b.type = Types.退室;
      b.aditAt = moment('2018-10-31 12:00:00').toDate();
      const c = new Adit();
      c.employeeId = e1.id;
      c.status = AditStatus.処理済み;
      c.type = Types.入室;
      c.aditAt = moment('2018-10-31 13:00:00').toDate();
      const list = [a, b, c];
      attendance = calcAttendance(list, attendance, configs);
      expect(attendance.employeeId).toBe(1);
      expect(attendance.status).toBe(AttendanceStatus.処理済み);
      expect(attendance.date).toBe('2018-10-31');
      expect(attendance.start).toBe('09:00:00');
      expect(attendance.end).toBe(null);
      expect(attendance.work).toBe(60*3);
      expect(attendance.rest).toBe(60);
      expect(attendance.overwork).toBe(0);
      expect(attendance.nighttime).toBe(0);
    });
    it('未承認を含むときはステータス未承認に', async () => {
      const a = new Adit();
      a.employeeId = e1.id;
      a.status = AditStatus.処理済み;
      a.type = Types.入室;
      a.aditAt = moment('2018-10-31 09:00:00').toDate();
      const b = new Adit();
      b.employeeId = e1.id;
      b.status = AditStatus.未承認;
      b.type = Types.退室;
      b.aditAt = moment('2018-10-31 12:00:00').toDate();
      const c = new Adit();
      c.employeeId = e1.id;
      c.status = AditStatus.処理済み;
      c.type = Types.入室;
      c.aditAt = moment('2018-10-31 13:00:00').toDate();
      const list = [a, b, c];
      attendance = calcAttendance(list, attendance, configs);
      expect(attendance.employeeId).toBe(1);
      expect(attendance.status).toBe(AttendanceStatus.未承認);
      expect(attendance.date).toBe('2018-10-31');
      expect(attendance.start).toBe('09:00:00');
      expect(attendance.end).toBe(null);
      expect(attendance.work).toBe(60*3);
      expect(attendance.rest).toBe(60);
      expect(attendance.overwork).toBe(0);
      expect(attendance.nighttime).toBe(0);
    });
    it('複数回の入退室', async () => {
      const a = new Adit();
      a.employeeId = e1.id;
      a.status = AditStatus.処理済み;
      a.type = Types.入室;
      a.aditAt = moment('2018-10-31 09:00:00').toDate();
      const b = new Adit();
      b.employeeId = e1.id;
      b.status = AditStatus.処理済み;
      b.type = Types.退室;
      b.aditAt = moment('2018-10-31 12:00:00').toDate();
      const c = new Adit();
      c.employeeId = e1.id;
      c.status = AditStatus.処理済み;
      c.type = Types.入室;
      c.aditAt = moment('2018-10-31 13:00:00').toDate();
      const d = new Adit();
      d.employeeId = e1.id;
      d.status = AditStatus.処理済み;
      d.type = Types.退室;
      d.aditAt = moment('2018-10-31 15:00:00').toDate();
      const e = new Adit();
      e.employeeId = e1.id;
      e.status = AditStatus.処理済み;
      e.type = Types.入室;
      e.aditAt = moment('2018-10-31 15:30:00').toDate();
      const f = new Adit();
      f.employeeId = e1.id;
      f.status = AditStatus.処理済み;
      f.type = Types.退室;
      f.aditAt = moment('2018-10-31 18:00:00').toDate();
      const list = [a, b, c, d, e, f];
      attendance = calcAttendance(list, attendance, configs);
      expect(attendance.employeeId).toBe(1);
      expect(attendance.status).toBe(AttendanceStatus.処理済み);
      expect(attendance.date).toBe('2018-10-31');
      expect(attendance.start).toBe('09:00:00');
      expect(attendance.end).toBe('18:00:00');
      expect(attendance.work).toBe(60*3 + 60*2 + 30 + 60*2);
      expect(attendance.rest).toBe(60 + 30);
      expect(attendance.overwork).toBe(0);
      expect(attendance.nighttime).toBe(0);
    });
  });

  describe('getAditsByEmployee', () => {
    let configs;
    let e1;
    let e2;
    beforeEach(() => {
      configs = [];
      e1 = new Employee();
      e1.id = 1;
      e2 = new Employee();
      e2.id = 2;
    });
    it('should be getAditsByEmployee', async () => {
      const a = new Adit();
      a.employeeId = e1.id;
      const b = new Adit();
      b.employeeId = e2.id;
      const c = new Adit();
      c.employeeId = e1.id;
      let list = [a, b, c];
      let result = getAditsByEmployee(list);
      expect(result).toEqual([[a, c],[b]]);
    });
  });

  describe('marumeAdits', () => {
    let configs;
    it('should be 処理済み', async () => {
      const a = new Adit();
      const list = [a];
      expect(a.status).not.toBe(AditStatus.処理済み);
      const listMarumed = await marumeAdits(list, configs);
      expect(a.status).not.toBe(AditStatus.処理済み);
      expect(listMarumed[0].status).toBe(AditStatus.処理済み);
    });
    it('should be 入室丸め1', async () => {
      configs = [
        { name:'day_begin_round_unit', val1: '1' },
      ];
      const a = new Adit();
      a.type = Types.入室;
      a.created = moment('2018-10-31 09:00:01').toDate();
      const list = [a];
      const listMarumed = await marumeAdits(list, configs);
      expect(listMarumed[0].aditAt).toEqual(moment('2018-10-31 09:01:00').toDate());
    });
    it('should be 入室丸め2', async () => {
      configs = [
        { name:'day_begin_round_unit', val1: '15' },
      ];
      const a = new Adit();
      a.type = Types.入室;
      a.created = moment('2018-10-31 08:45:01').toDate();
      const list = [a];
      const listMarumed = await marumeAdits(list, configs);
      expect(listMarumed[0].aditAt).toEqual(moment('2018-10-31 09:00:00').toDate());
    });
    it('should be 退室丸め1', async () => {
      configs = [
        { name:'day_end_round_unit', val1: '1' },
      ];
      const a = new Adit();
      a.type = Types.退室;
      a.created = moment('2018-10-31 17:00:01').toDate();
      const list = [a];
      const listMarumed = await marumeAdits(list, configs);
      expect(listMarumed[0].aditAt).toEqual(moment('2018-10-31 17:00:00').toDate());
    });
    it('should be 退室丸め2', async () => {
      configs = [
        { name:'day_end_round_unit', val1: '10' },
      ];
      const a = new Adit();
      a.type = Types.退室;
      a.created = moment('2018-10-31 17:09:59').toDate();
      const list = [a];
      const listMarumed = await marumeAdits(list, configs);
      expect(listMarumed[0].aditAt).toEqual(moment('2018-10-31 17:00:00').toDate());
    });
  });

  describe('getNextAditType', () => {
    const aditRepository = {
      find: jest.fn(() => {
        const a = new Adit();
        return [a];
      })
    };
    it('should be 入室', async () => {
      aditRepository.find = jest.fn(() => {
        return [];
      });
      const a = new Adit();
      const type = await getNextAditType(aditRepository, a);
      expect(aditRepository.find).toBeCalled();
      expect(type).toBe('入室');
    });
    it('should be 退室', async () => {
      aditRepository.find = jest.fn(() => {
        const a = new Adit();
        return [a];
      });
      const a = new Adit();
      const type = await getNextAditType(aditRepository, a);
      expect(aditRepository.find).toBeCalled();
      expect(type).toBe('退室');
    });
    it('should be 入室2', async () => {
      aditRepository.find = jest.fn(() => {
        const a = new Adit();
        return [a, a];
      });
      const a = new Adit();
      const type = await getNextAditType(aditRepository, a);
      expect(aditRepository.find).toBeCalled();
      expect(type).toBe('入室');
    });
  });

});
