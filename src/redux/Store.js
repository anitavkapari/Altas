import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import AuthReducer from './reducer/AuthReducer';
import {logger} from 'redux-logger';
import RootSaga from './reduxSaga/RootSaga';


let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

export default configureStore({
  reducer: {
    AuthReducer: AuthReducer,
   
  },
  middleware,
});

sagaMiddleware.run(RootSaga);
