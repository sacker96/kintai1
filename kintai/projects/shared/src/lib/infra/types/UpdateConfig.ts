/* tslint:disable */
// This file was automatically generated and should not be edited.

import { ConfigInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateConfig
// ====================================================

export interface UpdateConfig_updateConfig {
  name: string | null;
}

export interface UpdateConfig {
  updateConfig: UpdateConfig_updateConfig;
}

export interface UpdateConfigVariables {
  item?: (ConfigInput | null)[] | null;
}
