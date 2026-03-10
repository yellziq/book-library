import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/authSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      login({
        userName: userName || "Алина",
        email: email || "student@example.com",
      })
    );

    navigate("/profile");
  };

  return (
    <CommonWrapper title="Вход">
      <p className="page-text">Введите данные для входа в аккаунт.</p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Имя"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="button" type="submit">
          Войти
        </button>
      </form>
    </CommonWrapper>
  );
}