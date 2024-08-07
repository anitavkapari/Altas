// actions.js
import { TOGGLE_EMPLOYEE_STATUS, SET_SELECTED_EMPLOYEES } from './actionTypes';

export const toggleEmployeeStatus = (id) => ({
  type: TOGGLE_EMPLOYEE_STATUS,
  id,
});

export const setSelectedEmployees = (employees) => ({
  type: SET_SELECTED_EMPLOYEES,
  employees,
});