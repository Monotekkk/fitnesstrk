import Calendar from "../calendar";
import List from "../List";
import style from "./widget.module.css";
interface TWidget {
  type: "work" | "eat";
}
function Widget({ type }: TWidget) {
  return (
    <>
      <div className={style.block}>
        <div className={style.column}>
          <Calendar />
        </div>
        <div className={style.column}>
          <List />
        </div>
      </div>
    </>
  );
}
export default Widget;
