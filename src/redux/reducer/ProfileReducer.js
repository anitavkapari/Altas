
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  getTokenResponse: null,
  error: {},
  ProfileResponse: {},
  
};

const AuthSlice = createSlice({
  name: ' Profile',
  initialState,
  reducers: {
    //TOKEN
    // getTokenRequest(state, action) {
    //   state.isLoading = true;
    //   state.status = action.type;
    // },
    // getTokenSuccess(state, action) {
    //   state.isLoading = false;
    //   state.getTokenResponse = action.payload;
    //   state.status = action.type;
    // },
    // getTokenFailure(state, action) {
    //   state.isLoading = false;
    //   state.error = action.error;
    //   state.status = action.type;
    // },

    //signup
    ProfileRequest(state, action) {
      state.status = action.type;
    },
    ProfileSuccess(state, action) {
      state.ProfileResponse = action.payload;
      state.status = action.type;
    },
    ProfileFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    
  },
});

export const {
  ProfileRequest,
  ProfileSuccess,
  ProfileFailure, 
} =  ProfileSlice.actions;

export default  ProfileSlice.reducer;
