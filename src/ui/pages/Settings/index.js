import { DialogItem } from "../../components/DialogItem";
import style from "./style.module.css";
import { Link, Outlet } from "react-router-dom";

export const Settings = () => {
  return (
    <div className={style.wrapper}>
      <Link to="profile">
        <div className={style.profile}>
          <i class="fa-solid fa-user"></i>
          <span className={style.profile_text}>Настройка профиля</span>
        </div>
      </Link>
      <div className={style.language}>
        <i class="fa-solid fa-globe"></i>
        <span className={style.language_text}>Язык</span>
      </div>
      <Link to="exit">
        <div className={style.exit}>
          <i class="fa-solid fa-circle-xmark"></i>
          <span className={style.exit_text}>Выйти</span>
        </div>
      </Link>
      <Outlet />
    </div>
  );
};
