import Calendar from "../../components/calendar";
import Widget from "../../components/widget";
import style from "../page.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <Calendar />
      <Widget type="work" />
      <Widget type="eat" />
    </div>
  );
};
export default Home;
