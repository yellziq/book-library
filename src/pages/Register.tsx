import CommonWrapper from "../components/CommonWrapper";

export default function Register() {
  return (
    <CommonWrapper title="Регистрация">
      <p className="page-text">Создай новый аккаунт читателя.</p>

      <form className="form">
        <input className="input" type="text" placeholder="Имя" />
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Пароль" />
        <button className="button" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </CommonWrapper>
  );
}