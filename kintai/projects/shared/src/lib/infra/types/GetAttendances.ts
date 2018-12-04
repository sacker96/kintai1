/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAttendances
// ====================================================

export interface GetAttendances_attendances {
  id: string | null;
  employeeId: number | null;
  date: string | null;
  holiday: string | null;
  status: string | null;
  free_note: string | null;
  start: string | null;
  end: string | null;
  work: number | null;
  rest: number | null;
  overwork: number | null;
  nighttime: number | null;
  created: string;
  updated: string;
}

export interface GetAttendances {
  attendances: (GetAttendances_attendances | null)[] | null;
}

export interface GetAttendancesVariables {
  from: string;
  to: string;
  employeeId?: string | null;
}
