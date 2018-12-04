export class Employee {
  id?: string;
  lname: string;
  fname: string;
  email: string;
  tel: string;
  birth: string;
  employee_code: string;
  password: string;
  salary: string;
  transportation: string;
  enter: string;
  leave: string;
  free_note: string;
  free_note_2: string;
  free_note_3: string;
  tags: string;
  felica: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.lname = data.lname;
    this.fname = data.fname;
    this.email = data.email;
    this.tel = data.tel;
    this.birth = data.birth;
    this.employee_code = data.employee_code;
    this.password = data.password;
    this.salary = data.salary;
    this.transportation = data.transportation;
    this.enter = data.enter;
    this.leave = data.leave;
    this.free_note = data.free_note;
    this.free_note_2 = data.free_note_2;
    this.free_note_3 = data.free_note_3;
    this.tags = data.tags;
    this.felica = data.felica;
    this.created = data.created;
    this.updated = data.updated;

  }
}
