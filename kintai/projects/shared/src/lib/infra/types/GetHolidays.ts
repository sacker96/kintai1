/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHolidays
// ====================================================

export interface GetHolidays_holidays {
  id: string | null;
  created: string;
  updated: string;
  name: string | null;
  short: string | null;
  amount: number | null;
  holiday_type: string | null;
  paid_type: string | null;
  range: string | null;
  compensatory_term_from: string | null;
  limit_mode_from: string | null;
  compensatory_term: string | null;
  limitmode: string | null;
}

export interface GetHolidays {
  holidays: (GetHolidays_holidays | null)[] | null;
}
