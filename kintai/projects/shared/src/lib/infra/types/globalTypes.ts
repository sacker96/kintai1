/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AccountInput {
  id?: string | null;
  systemId: string;
  accountId?: string | null;
  password?: string | null;
  company: string;
  busho?: string | null;
  name: string;
  zip?: string | null;
  address?: string | null;
  address2?: string | null;
  tel?: string | null;
  email: string;
  staff?: string | null;
  remarks?: string | null;
  status: string;
  num: number;
}

export interface AditInput {
  id?: string | null;
  employeeId?: number | null;
  type?: string | null;
  method?: string | null;
  aditAt?: string | null;
  notice?: string | null;
  status?: string | null;
  history?: string | null;
}

export interface AttendanceInput {
  id?: string | null;
  employeeId?: number | null;
  date?: string | null;
  holiday?: string | null;
  status?: string | null;
  free_note?: string | null;
  start?: string | null;
  end?: string | null;
  work?: number | null;
  rest?: number | null;
  overwork?: number | null;
  nighttime?: number | null;
}

export interface ClosingInput {
  id?: string | null;
  date?: string | null;
  status?: string | null;
}

export interface ConfigInput {
  readType?: string | null;
  name?: string | null;
  val1?: string | null;
  val2?: string | null;
  val3?: string | null;
  num1?: number | null;
  num2?: number | null;
  num3?: number | null;
  extra?: string | null;
}

export interface EmployeeHolidayInput {
  id?: string | null;
  employeeId?: number | null;
  holidayId?: number | null;
  start?: string | null;
  end?: string | null;
  num?: number | null;
}

export interface EmployeeInput {
  id?: string | null;
  lname: string;
  fname: string;
  email: string;
  tel?: string | null;
  birth?: string | null;
  employee_code: string;
  password?: string | null;
  salary?: string | null;
  transportation?: string | null;
  enter?: string | null;
  leave?: string | null;
  free_note?: string | null;
  free_note_2?: string | null;
  free_note_3?: string | null;
  tags?: string | null;
  felica?: string | null;
}

export interface HolidayAppriedInput {
  id?: string | null;
  employeeId?: number | null;
  date?: string | null;
  message?: string | null;
  status?: string | null;
}

export interface HolidayInput {
  id?: string | null;
  name?: string | null;
  short?: string | null;
  amount?: number | null;
  holiday_type?: string | null;
  paid_type?: string | null;
  range?: string | null;
  compensatory_term_from?: string | null;
  limit_mode_from?: string | null;
  compensatory_term?: string | null;
  limitmode?: string | null;
}

export interface HolidayWorkingAppriedInput {
  id?: string | null;
  employeeId?: number | null;
  date?: string | null;
  holidayId?: string | null;
  message?: string | null;
  status?: string | null;
}

export interface MessageInput {
  id?: string | null;
  title?: string | null;
  message?: string | null;
}

export interface OverworkAppriedInput {
  id?: string | null;
  employeeId?: number | null;
  date?: string | null;
  start?: string | null;
  end?: string | null;
  message?: string | null;
  status?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
