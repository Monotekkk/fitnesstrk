import Calendar from "../../components/calendar";
import Widget from "../../components/widget";
import { useAppSelector } from "../../service/store/store";
import style from "../page.module.css";
const Home = () => {
  const date = useAppSelector((store) => store.modal.modalDate);
  return (
    <div className={style.container}>
      <Calendar />
      <Widget type="work" />
      <Widget type="eat" />
    </div>
  );
};
export default Home;
