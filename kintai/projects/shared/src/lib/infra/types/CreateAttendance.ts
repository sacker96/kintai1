/* tslint:disable */
// This file was automatically generated and should not be edited.

import { AttendanceInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateAttendance
// ====================================================

export interface CreateAttendance_createAttendance {
  id: string | null;
}

export interface CreateAttendance {
  createAttendance: CreateAttendance_createAttendance;
}

export interface CreateAttendanceVariables {
  item?: AttendanceInput | null;
}
