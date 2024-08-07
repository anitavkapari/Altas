// reducers.js
import { SET_SELECTED_EMPLOYEES } from './actionTypes';

const initialState = {
  selectedEmployees: [],
};

const selectedEmployeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_EMPLOYEES:
      return {
        ...state,
        selectedEmployees: action.employees,
      };
    default:
      return state;
  }
};

export default selectedEmployeesReducer;
