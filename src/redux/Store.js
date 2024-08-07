import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import RootSaga from '../saga/RootSaga';
import ProfileReducer from './reducer/ProfileReducer';


let SagaMiddleware = createSagaMiddleware();
const middleware = [SagaMiddleware, logger];
// const middleware = [SagaMiddleware];
export default configureStore({
  reducer: {
    ProfileReducer: ProfileReducer,
   
  },
  middleware,
});
SagaMiddleware.run(RootSaga);
