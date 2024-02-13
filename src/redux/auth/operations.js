import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosInstans = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  axiosInstans.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = token => {
  axiosInstans.defaults.headers.common.Authorization = '';
};

export const apiRegisterUser = createAsyncThunk(
  'auth/apiRegisterUser',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axiosInstans.post('/users/signup', formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  'auth/apiLoginUser',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axiosInstans.post('/users/login', formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  'auth/apiLogoutUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstans.post('/users/logout');
      clearToken(data.token);
      return;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  'auth/apiRefreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const { data } = await axiosInstans.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
