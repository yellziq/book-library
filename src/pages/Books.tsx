import { useEffect } from "react";
import CommonWrapper from "../components/CommonWrapper";
import BookCard from "../components/BookCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchBooks } from "../store/slices/booksSlice";

export default function Books() {
  const dispatch = useAppDispatch();
  const { books, loading, error } = useAppSelector((state) => state.books);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [dispatch, books.length]);

  return (
    <CommonWrapper title="Каталог книг">
      {loading && <p className="page-text">Загрузка...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </CommonWrapper>
  );
}