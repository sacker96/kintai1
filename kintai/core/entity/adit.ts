export class Adit {
  id?: string;
  employeeId: number;
  type: string;
  method: string;
  aditAt: string;
  notice: string;
  status: string;
  history: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.employeeId = data.employeeId;
    this.type = data.type;
    this.method = data.method;
    this.aditAt = data.aditAt;
    this.notice = data.notice;
    this.status = data.status;
    this.history = data.history;
    this.created = data.created;
    this.updated = data.updated;
  }
}
