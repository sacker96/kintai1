export class Account {
  id?: string;
  systemId: string;
  accountId?: string;
  password: string;
  company: string;
  busho: string;
  name: string;
  zip: string;
  address: string;
  address2: string;
  tel: string;
  email: string;
  staff: string;
  remarks: string;
  status: string;
  num: number;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.systemId = data.systemId;
    this.accountId = data.accountId;
    this.password = data.password;
    this.company = data.company;
    this.busho = data.busho;
    this.name = data.name;
    this.zip = data.zip;
    this.address = data.address;
    this.address2 = data.address2;
    this.tel = data.tel;
    this.email = data.email;
    this.staff = data.staff;
    this.remarks = data.remarks;
    this.status = data.status;
    this.num = data.num || 10;
    this.created = data.created;
    this.updated = data.updated;
  }
}
