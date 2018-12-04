export class Closing {
  id?: string;
  date: string;
  status: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.date = data.date;
    this.status = data.status;
    this.created = data.created;
    this.updated = data.updated;
  }
}
