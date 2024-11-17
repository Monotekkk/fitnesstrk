import List from "../List";
import style from "./widget.module.css";
interface TWidget {
  type: "work" | "eat";
}
function Widget({ type }: TWidget) {
  return (
    <>
      <div className={style.block}>
        <List />
      </div>
    </>
  );
}
export default Widget;
