import { DialogItem } from "../../components/DialogItem";
import style from "./style.module.css";

export const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <DialogItem name="Артём" message="оффлайн" />
      <DialogItem name="Матвей" message="онлайн" />
      <DialogItem name="Тёна" message="онлайн" />
      <DialogItem name="Кирилл" message="онлайн" />
      <DialogItem name="Лера" message="оффлайн" />
    </div>
  );
};
