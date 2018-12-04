/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAccounts
// ====================================================

export interface GetAccounts_accounts {
  created: string | null;
  systemId: string;
  company: string;
  name: string;
  busho: string | null;
  zip: string | null;
  address: string | null;
  address2: string | null;
  tel: string | null;
  email: string;
  num: number;
  staff: string | null;
  remarks: string | null;
  status: string;
}

export interface GetAccounts {
  accounts: (GetAccounts_accounts | null)[] | null;
}
