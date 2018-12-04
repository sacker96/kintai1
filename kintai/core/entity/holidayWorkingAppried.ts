export class HolidayWorkingAppried {
  id?: string;
  employeeId: number;
  date: string;
  holidayId: number;
  message: string;
  status: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.employeeId = data.employeeId;
    this.date = data.date;
    this.holidayId = data.holidayId;
    this.message = data.message;
    this.status = data.status;
    this.created = data.created;
    this.updated = data.updated;
  }
}
