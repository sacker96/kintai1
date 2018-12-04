/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAditsByDate
// ====================================================

export interface GetAditsByDate_aditsByDate {
  id: string | null;
  type: string | null;
  method: string | null;
  aditAt: string | null;
  notice: string | null;
  status: string | null;
  history: string | null;
}

export interface GetAditsByDate {
  aditsByDate: (GetAditsByDate_aditsByDate | null)[] | null;
}

export interface GetAditsByDateVariables {
  date: string;
}
