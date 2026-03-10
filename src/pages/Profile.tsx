import CommonWrapper from "../components/CommonWrapper";
import { useAppSelector } from "../store/hooks";

export default function Profile() {
  const { userName, email } = useAppSelector((state) => state.auth);

  return (
    <CommonWrapper title="Профиль пользователя">
      <div className="profile-box">
        <p className="page-text">
          <strong>Имя:</strong> {userName}
        </p>
        <p className="page-text">
          <strong>Email:</strong> {email}
        </p>
        <p className="page-text">
          <strong>Статус:</strong> Авторизованный пользователь
        </p>
      </div>
    </CommonWrapper>
  );
}