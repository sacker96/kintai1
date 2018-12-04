export class Message {
  id?: string;
  title: string;
  message: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.message = data.message;
    this.created = data.created;
    this.updated = data.updated;
  }
}
