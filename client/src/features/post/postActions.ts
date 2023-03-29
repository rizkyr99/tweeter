import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { AuthState } from '../auth/authSlice';

const backendURL = 'http://127.0.0.1:8000';

interface IPost {
  content: string;
  image?: any;
}

export const createPost = createAsyncThunk(
  'post/create',
  async ({ content, image }: IPost, { rejectWithValue, getState }) => {
    const { auth } = getState() as { auth: AuthState };
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.userInfo.token}`,
        },
      };

      console.log(image);
      const formData = new FormData();

      formData.append('content', content);
      formData.append('image', image);

      console.log(image);

      const { data } = await axios.post(
        `${backendURL}/api/posts`,
        formData,
        config
      );

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
