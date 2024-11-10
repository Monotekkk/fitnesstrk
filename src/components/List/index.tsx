import { useAppSelector } from "../../service/store/store";
import style from "./list.module.css";
const List = () => {
  const date = useAppSelector((store) => store.modal.modalDate);
  return (
    <div className={style.block}>
      <h3 className={style.title}>{`${new Date(date).getDate()}.${
        new Date(date).getMonth() + 1
      }.${new Date(date).getFullYear()}`}</h3>
      <ul className={style.list}>
        <li className={style.listItem}>Разминка</li>
        <li className={style.listItem}>Жим</li>
        <li className={style.listItem}>Жим под углом вверх</li>
        <li className={style.listItem}>Разводка</li>
        <li className={style.listItem}>Трицепс</li>
        <li className={style.listItem}>Бег</li>
      </ul>
    </div>
  );
};
export default List;
