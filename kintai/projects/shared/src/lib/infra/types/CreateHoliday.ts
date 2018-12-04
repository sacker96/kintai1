/* tslint:disable */
// This file was automatically generated and should not be edited.

import { HolidayInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateHoliday
// ====================================================

export interface CreateHoliday_createHoliday {
  id: string | null;
}

export interface CreateHoliday {
  createHoliday: CreateHoliday_createHoliday;
}

export interface CreateHolidayVariables {
  item?: HolidayInput | null;
}
