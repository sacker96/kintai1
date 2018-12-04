/* tslint:disable */
// This file was automatically generated and should not be edited.

import { EmployeeInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateEmployee
// ====================================================

export interface CreateEmployee_createEmployee {
  id: string | null;
}

export interface CreateEmployee {
  createEmployee: CreateEmployee_createEmployee;
}

export interface CreateEmployeeVariables {
  item?: EmployeeInput | null;
}
