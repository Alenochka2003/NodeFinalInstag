import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../utils/api.ts';

// Получение всех постов
export const fetchPosts = createAsyncThunk('post/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await $api.get('/post');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при получении постов');
  }
});
// Получение всех постов user
export const fetchPostsUser = createAsyncThunk('post/fetchPostsUser', async (_, { rejectWithValue }) => {
  try {
    const response = await $api.get('/post/all');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при получении постов');
  }
});

// Удаление поста
export const deletePost = createAsyncThunk('post/deletePost', async (postId, { rejectWithValue }) => {
  try {
    const response = await $api.delete(`/post/${postId}`);
    return postId; // Возвращаем только postId для обновления состояния
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при удалении поста');
  }
});

// Создание postSlice
const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка получения всех постов
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Используем payload для получения rejectWithValue
      })
       // Обработка получения всех постов user
       .addCase(fetchPostsUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPostsUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Используем payload для получения rejectWithValue
      })

      // Обработка удаления поста
      .addCase(deletePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Используем payload для получения rejectWithValue
      });
  },
});

export default postSlice.reducer;
