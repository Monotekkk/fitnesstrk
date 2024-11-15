import { useAppSelector } from "../../service/store/store";
import Calendar from "../calendar";
import List from "../List";
import style from "./widget.module.css";
interface TWidget {
  type: "work" | "eat";
}
function Widget({ type }: TWidget) {
  const date = useAppSelector((store) => store.modal.modalDate);
  return (
    <>
      <div>
        {" "}
        <h3 className={style.title}>{`${new Date(date).getDate()}.${
          new Date(date).getMonth() + 1
        }.${new Date(date).getFullYear()}`}</h3>
      </div>
      <div className={style.block}>
        <List />
      </div>
    </>
  );
}
export default Widget;
