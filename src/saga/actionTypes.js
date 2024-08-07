// actionTypes.js
export const TOGGLE_EMPLOYEE_STATUS = 'TOGGLE_EMPLOYEE_STATUS';
export const SET_SELECTED_EMPLOYEES = 'SET_SELECTED_EMPLOYEES';

// actions.js
// import { TOGGLE_EMPLOYEE_STATUS, SET_SELECTED_EMPLOYEES } from  './sagas';

export const toggleEmployeeStatus = (id) => ({
  type: TOGGLE_EMPLOYEE_STATUS,
  id,
});

export const setSelectedEmployees = (employees) => ({
  type: SET_SELECTED_EMPLOYEES,
  employees,
});
