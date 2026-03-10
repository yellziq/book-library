import { Link } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper";

export default function Home() {
  return (
    <CommonWrapper title="Добро пожаловать в BookSpace ✨">
      <p className="page-text">
        Это учебный проект онлайн-библиотеки. Здесь можно смотреть каталог
        книг, открывать подробную информацию, сохранять избранное и работать с
        личным профилем.
      </p>

      <div className="hero-actions">
        <Link to="/books" className="button-link">
          Открыть каталог
        </Link>
        <Link to="/favorites" className="secondary-link">
          Мои избранные книги
        </Link>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>Каталог</h3>
          <p>Просмотр списка книг с обложками, жанрами и авторами.</p>
        </div>
        <div className="info-card">
          <h3>Избранное</h3>
          <p>Сохраняй понравившиеся книги в личную коллекцию.</p>
        </div>
        <div className="info-card">
          <h3>Профиль</h3>
          <p>Закрытая страница пользователя с базовой авторизацией.</p>
        </div>
      </div>
    </CommonWrapper>
  );
}