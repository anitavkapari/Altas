// sagas.js
import { put, select, takeLatest } from 'redux-saga/effects';
import { TOGGLE_EMPLOYEE_STATUS, setSelectedEmployees } from './actions';

// Selector to get current employees and selected employees from state
const selectEmployees = (state) => state.employees;
const selectSelectedEmployees = (state) => state.selectedEmployees;

function* toggleEmployeeStatusSaga(action) {
  const employees = yield select(selectEmployees);
  const selectedEmployees = yield select(selectSelectedEmployees);

  // Find the updated employee
  const updatedEmployee = employees.find(employee => employee.id === action.id);
  const toggledEmployee = { ...updatedEmployee, isActive: !updatedEmployee.isActive };

  // Update the selectedEmployees list
  const isAlreadySelected = selectedEmployees.some(emp => emp.id === action.id);
  const updatedSelectedEmployees = isAlreadySelected
    ? selectedEmployees.map(emp =>
        emp.id === action.id ? toggledEmployee : emp
      )
    : [...selectedEmployees, toggledEmployee];

  yield put(setSelectedEmployees(updatedSelectedEmployees));
}

export function* watchToggleEmployeeStatus() {
  yield takeLatest(TOGGLE_EMPLOYEE_STATUS, toggleEmployeeStatusSaga);
}
