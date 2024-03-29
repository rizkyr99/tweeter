import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { registerUser } from './authActions';

export interface AuthState {
  loading: boolean;
  userInfo: any;
  error: any;
  success: boolean;
}

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') as string)
  : null;

const initialState: AuthState = {
  loading: false,
  userInfo,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userInfo');
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
