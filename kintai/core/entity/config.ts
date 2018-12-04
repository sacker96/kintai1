export class Config {
  readType: string;
  name: string;
  val1: string;
  val2: string;
  val3: string;
  num1: number;
  num2: number;
  num3: number;
  extra: string;
  updated?: string;

  constructor(data: any) {
    this.readType = data.readType;
    this.name = data.name;
    this.val1 = data.val1;
    this.val2 = data.val2;
    this.val3 = data.val3;
    this.num1 = data.num1;
    this.num2 = data.num2;
    this.num3 = data.num3;
    this.extra = data.extra;
    this.updated = data.updated;
  }
}
