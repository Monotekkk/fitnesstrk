import style from "./header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
      <Link to={"/"} className={style.nav_link}>
              <p className={style.nav_link}>logo</p>
          </Link>
        <ul className={style.container}>
          <Link to={"/"} className={style.nav_link}>
            <li className={style.nav_item}>Главная</li>
          </Link>
          <Link to={"/gym"} className={style.nav_link}>
            <li className={style.nav_item}>Тренировки</li>
          </Link>
          <Link to={"/"} className={style.nav_link}>
            <li className={style.nav_item}>Питание</li>
          </Link>
          <Link to={"/"} className={style.nav_link}>
            <li className={style.nav_item}>Сон</li>
          </Link>
          <Link to={"/"} className={style.nav_link}>
            <li className={style.nav_item}>Мотивация</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
