export class HolidayAppried {
  id?: string;
  holidayId: number;
  employeeId: number;
  date: string;
  message: string;
  status: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.holidayId = data.holidayId;
    this.employeeId = data.employeeId;
    this.date = data.date;
    this.message = data.message;
    this.status = data.status;
    this.created = data.created;
    this.updated = data.updated;
  }
}
