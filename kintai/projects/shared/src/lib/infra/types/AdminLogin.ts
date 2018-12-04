/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AdminLogin
// ====================================================

export interface AdminLogin_adminlogin {
  token: string;
  systemId: string;
}

export interface AdminLogin {
  adminlogin: AdminLogin_adminlogin | null;
}

export interface AdminLoginVariables {
  systemId?: string | null;
  email?: string | null;
  password?: string | null;
}
