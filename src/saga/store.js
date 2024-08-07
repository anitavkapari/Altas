// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import selectedEmployeesReducer from './reducers';
import { watchToggleEmployeeStatus } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  selectedEmployees: selectedEmployeesReducer,
  // Add other reducers here if necessary
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchToggleEmployeeStatus);

export default store;
