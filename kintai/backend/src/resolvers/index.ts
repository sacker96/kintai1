import { Query } from './Query';
import { auth } from './Mutation/auth';

import { account } from './Mutation/account';
import { adit } from './Mutation/adit';
import { attendance } from './Mutation/attendance';
import { closing } from './Mutation/closing';
import { config } from './Mutation/config';
import { employee } from './Mutation/employee';
import { employeeHoliday } from './Mutation/employeeHoliday';
import { holiday } from './Mutation/holiday';
import { holidayAppried } from './Mutation/holidayAppried';
import { holidayWorkingAppried } from './Mutation/holidayWorkingAppried';
import { message } from './Mutation/message';
import { overworkAppried } from './Mutation/overworkAppried';

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...account,
    ...adit,
    ...attendance,
    ...closing,
    ...config,
    ...employee,
    ...employeeHoliday,
    ...holiday,
    ...holidayAppried,
    ...holidayWorkingAppried,
    ...message,
    ...overworkAppried,
  },
  // Subscription,
};
