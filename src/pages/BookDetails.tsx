import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchBooks } from "../store/slices/booksSlice";
import { toggleFavorite } from "../store/slices/favoritesSlice";

export default function BookDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.books);
  const favoriteIds = useAppSelector((state) => state.favorites.ids);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [dispatch, books.length]);

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <CommonWrapper title="Книга не найдена">
        <p className="page-text">Такой книги нет в каталоге.</p>
      </CommonWrapper>
    );
  }

  const isFavorite = favoriteIds.includes(book.id);

  return (
    <CommonWrapper title={book.title}>
      <div className="details-layout">
        <img className="details-image" src={book.image} alt={book.title} />

        <div>
          <p className="page-text">
            <strong>Автор:</strong> {book.author}
          </p>
          <p className="page-text">
            <strong>Жанр:</strong> {book.genre}
          </p>
          <p className="page-text">
            <strong>Год:</strong> {book.year}
          </p>
          <p className="page-text">
            <strong>Описание:</strong> {book.description}
          </p>

          <button
            className="button"
            onClick={() => dispatch(toggleFavorite(book.id))}
          >
            {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
          </button>
        </div>
      </div>
    </CommonWrapper>
  );
}