import { useEffect, useState, ChangeEvent } from "react";
import style from "./calendar.module.css";
function Calendar() {
  const [date, setDate] = useState<Date>(new Date());
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date[][] | undefined[][]>();
  const arrMonth = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const arrWeekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вc"];
  const arrDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const handlePrevButtonClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };
  const handleNextButtonClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setDate(new Date(date.getFullYear(), Number(e.target.value)));
  };
  const getMonthData = () => {
    let result: Date[][] | undefined[][] = [];
    let day = 1;
    const daysInMonth = getDaysInMonth();
    const monthStartsOn = getDayOfWeek(new Date(date.getFullYear(), date.getMonth(), 1));
    for (let i = 0; i < (daysInMonth + monthStartsOn) / 7; i++) {
      result[i] = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
          result[i][j] = undefined;
        } else {
          result[i][j] = new Date(date.getFullYear(), date.getMonth(), day++);
        }
      }
    }
    setCurrentMonth(result);
  };
  const getDaysInMonth = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    if (isLeepYaer(year) && month === 1) {
      return arrDaysInMonth[month] + 1;
    } else {
      return arrDaysInMonth[month];
    }
  };
  const getDayOfWeek = (date:Date) => {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return 6;
    return dayOfWeek - 1;
  };
  const isLeepYaer = (year: number) => {
    return !(year % 4 || !(year & 100 && year % 400));
  };
  const handleDayClick = (date: Date) => {};
  useEffect(() => {
    getMonthData();
  }, [date]);
  return (
    <div className={style.calendar}>
      <div className={style.block}>
        <button className={style.button} onClick={() => handlePrevButtonClick()}>{"<"}</button>
        <select
          defaultValue={nowDate.getMonth()}
          value={date.getMonth()}
          onChange={(e) => handleSelectChange(e)}
        >
          {arrMonth.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          defaultValue={nowDate.getFullYear()}
          onChange={(e) => handleSelectChange(e)}
          value={date.getFullYear()}
        >
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
        <button className={style.button} onClick={() => handleNextButtonClick()}>{">"}</button>
      </div>
      <div className={style.block}>
      <table>
        <thead>
          <tr>
            {arrWeekDays.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentMonth &&
            currentMonth.map((week, index) => (
              <tr key={index}>
                {week.map((date, index) =>
                  date ? (
                    <td className={date.getDate() === nowDate.getDate() ? style.today : style.day} key={index}>{date.getDate()}</td>
                  ) : (
                    <td key={index}></td>
                  )
                )}
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
export default Calendar;
