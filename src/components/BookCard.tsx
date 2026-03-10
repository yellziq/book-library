import { Link } from "react-router-dom";
import type { Book } from "../types/book";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleFavorite } from "../store/slices/favoritesSlice";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector((state) => state.favorites.ids);
  const isFavorite = favoriteIds.includes(book.id);

  return (
    <div className="book-card">
      <img className="book-image" src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p className="muted">
        {book.genre}, {book.year}
      </p>

      <div className="card-actions">
        <Link to={`/books/${book.id}`} className="button-link">
          Подробнее
        </Link>

        <button
          className="secondary-button"
          onClick={() => dispatch(toggleFavorite(book.id))}
        >
          {isFavorite ? "Убрать" : "В избранное"}
        </button>
      </div>
    </div>
  );
}