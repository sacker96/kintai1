export class EmployeeHoliday {
  id?: string;
  employeeId: number;
  holidayId: number;
  start: string;
  end: string;
  num: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.employeeId = data.employeeId;
    this.holidayId = data.holidayId;
    this.start = data.start;
    this.end = data.end;
    this.num = data.num;
    this.created = data.created;
    this.updated = data.updated;
  }
}
