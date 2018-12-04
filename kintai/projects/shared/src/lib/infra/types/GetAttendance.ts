/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAttendance
// ====================================================

export interface GetAttendance_attendance {
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

export interface GetAttendance {
  attendance: GetAttendance_attendance;
}

export interface GetAttendanceVariables {
  id: string;
}
