import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBooksApi } from "../../api/booksApi";
import type { Book } from "../../types/book";

interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  return await fetchBooksApi();
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.error = "Не удалось загрузить книги";
      });
  },
});

export default booksSlice.reducer;