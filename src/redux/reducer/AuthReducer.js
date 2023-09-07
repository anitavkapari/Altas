import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,

  getTokenResponse: {},
  loginResponse:{}
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    //token
    getTokenRequest(state, action) {
      // state.isLoading = true;
      state.status = action.type;
    },
    getTokenSuccess(state, action) {
      // state.isLoading = false;
      state.getTokenResponse = action.payload;
      state.status = action.type;
    },
    getTokenFailure(state, action) {
      // state.isLoading = false;
      // state.error = action.error;
      state.status = action.type;
    },

    loginRequest(state, action) {
      // state.isLoading = true;
      state.status = action.type;
    },
    loginSuccess(state, action) {
      // state.isLoading = false;
      state.loginResponse = action.payload;
      state.status = action.type;
    },
    loginFailure(state, action) {
      // state.isLoading = false;
      // state.error = action.error;
      state.status = action.type;
    },


   
  },
});

export const {
 getTokenRequest,
 getTokenSuccess,
 getTokenFailure,
 //login
 loginRequest,
 loginSuccess,
 loginFailure

} = AuthSlice.actions;

export default AuthSlice.reducer;
