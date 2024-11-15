import { useAppSelector } from "../../service/store/store";
import style from "./list.module.css";
const List = () => {
  const date = useAppSelector((store) => store.modal.modalDate);
  return (
    <div className={style.block}>
      <ol className={style.list}>
        <li className={style.listItem}>Разминка</li>
        <li className={style.listItem}>Жим</li>
        <li className={style.listItem}>Жим под углом вверх</li>
        <li className={style.listItem}>Разводка</li>
        <li className={style.listItem}>Трицепс</li>
        <li className={style.listItem}>Бег</li>
      </ol>
    </div>
  );
};
export default List;
