import { DialogItem } from "../../components/DialogItem";
import style from "./style.module.css";

export const Chat = () => {
  return (
    <div className={style.wrapper}>
      <DialogItem
        name="Артём"
        message="Я фронтер и ваще лучший тутаааааvvvvvvvvvvvvvvvvvvvаааааааа"
        time="15:00"
      />
      <DialogItem name="Матвей" message="Как дела" time="9:00" />
      <DialogItem name="Тёна" message="Как дела" time="5:00" />
      <DialogItem name="Кирилл" message="Как дела" time="5:00" />
      <DialogItem name="Лера" message="Как дела" time="6:00" />
    </div>
  );
};
