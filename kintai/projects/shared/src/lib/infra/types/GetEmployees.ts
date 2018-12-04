/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEmployees
// ====================================================

export interface GetEmployees_employees {
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

export interface GetEmployees {
  employees: (GetEmployees_employees | null)[] | null;
}
