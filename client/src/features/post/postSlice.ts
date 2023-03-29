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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
