import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginPayload } from 'HappGer/src/interfaces/auth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  } as AuthState,
  
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => {
      state.user = action.payload.username;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailed, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
