export class OverworkAppried {
  id?: string;
  employeeId: number;
  date: string;
  start: string;
  end: string;
  message: string;
  status: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.employeeId = data.employeeId;
    this.date = data.date;
    this.start = data.start;
    this.end = data.end;
    this.message = data.message;
    this.status = data.status;
    this.created = data.created;
    this.updated = data.updated;
  }
}
