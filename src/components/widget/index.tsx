import Calendar from "../calendar";
import style from "./widget.module.css";
interface TWidget {
  type: "work" | "eat";
}
function Widget({ type }: TWidget) {
  return (
    <div className={style.block}>
      <h2 className={style.header}>
        {type === "work"
          ? "Тренировки"
          : type === "eat"
          ? "Еда"
          : "Ещё какой-то тип"}{" "}
        на этой неделе
      </h2>
      <div className={style.column}>
        <Calendar/>
      </div>
    </div>
  );
}
export default Widget;
