/* tslint:disable */
// This file was automatically generated and should not be edited.

import { AttendanceInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAttendance
// ====================================================

export interface UpdateAttendance_updateAttendance {
  id: string | null;
}

export interface UpdateAttendance {
  updateAttendance: UpdateAttendance_updateAttendance;
}

export interface UpdateAttendanceVariables {
  item?: AttendanceInput | null;
}
