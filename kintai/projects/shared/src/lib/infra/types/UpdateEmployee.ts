/* tslint:disable */
// This file was automatically generated and should not be edited.

import { EmployeeInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateEmployee
// ====================================================

export interface UpdateEmployee_updateEmployee {
  id: string | null;
}

export interface UpdateEmployee {
  updateEmployee: UpdateEmployee_updateEmployee;
}

export interface UpdateEmployeeVariables {
  item?: EmployeeInput | null;
}
