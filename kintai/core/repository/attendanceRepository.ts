import { Attendance } from '../entity/attendance';
import { Repository } from './repository';

export interface AttendanceRepository extends Repository<Attendance> {}
