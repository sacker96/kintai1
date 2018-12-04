/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  token: string;
  systemId: string;
}

export interface Login {
  login: Login_login | null;
}

export interface LoginVariables {
  systemId?: string | null;
  email?: string | null;
  password?: string | null;
}
