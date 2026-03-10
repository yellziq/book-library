import CommonWrapper from "../components/CommonWrapper";
import BookCard from "../components/BookCard";
import { useAppSelector } from "../store/hooks";

export default function Favorites() {
  const books = useAppSelector((state) => state.books.books);
  const favoriteIds = useAppSelector((state) => state.favorites.ids);

  const favoriteBooks = books.filter((book) => favoriteIds.includes(book.id));

  return (
    <CommonWrapper title="Избранные книги">
      {favoriteBooks.length === 0 ? (
        <p className="page-text">Пока нет избранных книг.</p>
      ) : (
        <div className="books-grid">
          {favoriteBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </CommonWrapper>
  );
}