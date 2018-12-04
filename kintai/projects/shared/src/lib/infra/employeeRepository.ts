import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { EmployeeRepository as IEmployeeRepository } from 'core/repository/employeeRepository';
import { Employee } from 'core/entity/employee';

declare var require: any;
const getEmployees = require('graphql-tag/loader!./queries/getEmployees.graphql');
const getEmployee = require('graphql-tag/loader!./queries/getEmployee.graphql');
const me = require('graphql-tag/loader!./queries/me.graphql');
const createEmployee = require('graphql-tag/loader!./mutations/createEmployee.graphql');
const updateEmployee = require('graphql-tag/loader!./mutations/updateEmployee.graphql');

@Injectable({
  providedIn: 'root'
})
export class EmployeeRepository extends BaseRepository<Employee> implements IEmployeeRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: Employee): Promise<boolean> {
    return this.mutate('createEmployee', createEmployee, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: Employee): Promise<boolean> {
    return this.mutate('updateEmployee', updateEmployee, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<Employee[]> {
    return this.query('employees', getEmployees);
  }

  findOne(id: string): Promise<Employee> {
    return this.query('employee', getEmployee, { id });
  }

  me(): Promise<Account> {
    return this.query('me', me);
  }
}
