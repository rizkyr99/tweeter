import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://127.0.0.1:8000';

interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    { email, firstName, lastName, password }: IUser,
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${backendURL}/api/users`,
        { email, firstName, lastName, password },
        config
      );

      localStorage.setItem('userToken', data.token);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
