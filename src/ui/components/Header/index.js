import { useLocation, useParams } from "react-router-dom";
import style from "./style.module.css";

export const Header = () => {
  const location = useLocation();
  const getLocationName = {
    "/settings/profile": "Настройка профиля",
    "/settings/exit": "Войти",
    "/": "Чаты",
    "/contacts": "Контакты",
    "/settings": "Настройки",
  };

  return (
    <div className={style.wrapper}>{getLocationName[location.pathname]}</div>
  );
};
