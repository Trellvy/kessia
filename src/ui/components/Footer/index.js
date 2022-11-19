import { Link } from "react-router-dom";
import style from "./style.module.css";

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <Link to="/contacts" className={style.contacts}>
          <div>
            <i class="fa-solid fa-user"></i>
          </div>
          Контакты
        </Link>
        <Link to="/" className={style.chat}>
          <div>
            <i class="fa-sharp fa-solid fa-comments"></i>
          </div>
          Чаты
        </Link>
        <Link to="/settings" className={style.settings}>
          <div>
            <i class="fa-solid fa-gear"></i>
          </div>
          Настройки
        </Link>
      </div>
    </div>
  );
};
