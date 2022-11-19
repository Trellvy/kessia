import style from "./style.module.css";

export const DialogItem = (props) => {
  return (
    <div className={style.wrapper}>
      <div
        className={style.avatar}
        style={{
          backgroundImage: "url(https://i.pinimg.com/474x/55/bc/69/55bc69e1131276480f8e4eeaa6857f25.jpg)",
        }}
      ></div>
      <div className={style.infoBlock}>
        <p className={style.name}>{props.name}</p>
        <p className={style.message}>{props.message}</p>
      </div>

      <p className={style.time}>{props.time}</p>
    </div>
  );
};
