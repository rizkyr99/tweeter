import { createSlice } from '@reduxjs/toolkit';
import { createPost } from './postActions';

interface PostState {
  loading: boolean;
  success: boolean;
  error: any;
}

const initialState: PostState = {
  loading: false,
  success: false,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetPost: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetPost } = postSlice.actions;

export default postSlice.reducer;
