export class Holiday {
  id?: string;
  name: string;
  short: string;
  amount: number;
  holiday_type: string;
  paid_type: string;
  range: string;
  compensatory_term_from: string;
  limit_mode_from: string;
  compensatory_term: string;
  limitmode: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.short = data.short;
    this.amount = data.amount;
    this.holiday_type = data.holiday_type;
    this.paid_type = data.paid_type;
    this.range = data.range;
    this.compensatory_term_from = data.compensatory_term_from;
    this.limit_mode_from = data.limit_mode_from;
    this.compensatory_term = data.compensatory_term;
    this.limitmode = data.limitmode;
    this.created = data.created;
    this.updated = data.updated;
  }
}
