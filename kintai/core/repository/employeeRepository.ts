import { Employee } from '../entity/employee';
import { Repository } from './repository';

export interface EmployeeRepository extends Repository<Employee> {}
