import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import constants from '../../utils/helpers/constants';
import {

  getTokenRequest,
  getTokenSuccess,
  getTokenFailure,
loginRequest,
loginSuccess,
loginFailure
} from '../reducer/AuthReducer';
import Toast from '../../utils/helpers/Toast';

import {getApi, postApi} from '../../utils/helpers/ApiRequest';
let getItem = state => state.AuthReducer;
let getItemPassToken = state => state.AuthReducer;

let token = '';

///tokenSaga


export function* getTokenSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(
      postApi,
      'getNewToken',
      action?.payload,
      header,
    ); 
    if (response?.status == 200) {
      yield put(getTokenSuccess(response?.data));
      // Toast(response.data.message);
    } 
    else {
      yield put(getTokenFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    console.log(error);
    yield put(getTokenFailure(error));
   
  }
}
//loginSaga
export function* loginSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(
      postApi,
      'login',
      action?.payload,
      header,
    ); 
    if (response?.status == 200) {
      yield put(loginSuccess(response?.data));
      // Toast(response.data.message);
    } 
    else {
      yield put(loginFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    console.log(error);
    yield put(loginFailure(error));
   
  }
}
const watchFunction = [ //gettokenforgetPasswordSaga
  
  (function* () {
    yield takeLatest('Auth/getTokenRequest', getTokenSaga);
  })(),//loginRequest
  (function* () {
    yield takeLatest('Auth/loginRequest', loginSaga);
  })(),
 
];
 
export default watchFunction;
