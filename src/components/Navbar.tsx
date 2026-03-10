import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/slices/authSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { isAuth, userName } = useAppSelector((state) => state.auth);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">BookSpace</div>

        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
          <NavLink to="/books" className="nav-link">
            Книги
          </NavLink>
          <NavLink to="/favorites" className="nav-link">
            Избранное
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Профиль
          </NavLink>
          {!isAuth && (
            <>
              <NavLink to="/login" className="nav-link">
                Вход
              </NavLink>
              <NavLink to="/register" className="nav-link">
                Регистрация
              </NavLink>
            </>
          )}
        </nav>

        {isAuth && (
          <div className="user-box">
            <span className="user-name">{userName}</span>
            <button className="small-button" onClick={() => dispatch(logout())}>
              Выйти
            </button>
          </div>
        )}
      </div>
    </header>
  );
}