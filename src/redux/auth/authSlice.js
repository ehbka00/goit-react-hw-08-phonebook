import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  apiLoginUser,
  apiRegisterUser,
  apiLogoutUser,
  apiRefreshUser,
} from './operations';

const initialState = {
  token: null,
  user: { name: '', email: '', password: '' },
  isLoggedIn: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.isLoggedIn = true;
  state.error = null;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(apiRegisterUser.fulfilled, handleFulfilled)
      .addCase(apiLoginUser.fulfilled, handleFulfilled)
      .addCase(apiLogoutUser.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiLogoutUser.pending,
          apiRefreshUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiRefreshUser.rejected,
          apiLogoutUser.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
