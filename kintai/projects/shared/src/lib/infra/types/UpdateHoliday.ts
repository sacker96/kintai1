/* tslint:disable */
// This file was automatically generated and should not be edited.

import { HolidayInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateHoliday
// ====================================================

export interface UpdateHoliday_updateHoliday {
  id: string | null;
}

export interface UpdateHoliday {
  updateHoliday: UpdateHoliday_updateHoliday;
}

export interface UpdateHolidayVariables {
  item?: HolidayInput | null;
}
