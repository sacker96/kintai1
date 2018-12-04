/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEmployee
// ====================================================

export interface GetEmployee_employee {
  id: string | null;
  created: string;
  updated: string;
  lname: string;
  fname: string;
  email: string;
  tel: string | null;
  birth: string | null;
  employee_code: string;
  salary: string | null;
  transportation: string | null;
  enter: string | null;
  leave: string | null;
  free_note: string | null;
  free_note_2: string | null;
  free_note_3: string | null;
  tags: string | null;
}

export interface GetEmployee {
  employee: GetEmployee_employee;
}

export interface GetEmployeeVariables {
  id: string;
}
