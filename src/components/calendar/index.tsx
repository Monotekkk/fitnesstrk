import { useEffect, useState, ChangeEvent, MouseEvent } from "react";
import style from "./calendar.module.css";
import { useAppDispatch } from "../../service/store/store";
import { modalOpen } from "../../service/reducers/modalReducers";
function Calendar() {
  const [dateValue, setDateValue] = useState<Date>(new Date());
  const nowDate= new Date();
  const [currentMonth, setCurrentMonth] = useState<Date[][] | undefined[][]>();
  const [yearsValue, setYearsValue] = useState<string[]>();
  const dispatch = useAppDispatch();
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
    setDateValue(new Date(dateValue.getFullYear(), dateValue.getMonth() - 1));
  };
  const handleNextButtonClick = () => {
    setDateValue(new Date(dateValue.getFullYear(), dateValue.getMonth() + 1));
  };
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (+e.target.value > 1970) {
      setDateValue(new Date(Number(e.target.value), dateValue.getMonth()));
    } else {
      setDateValue(new Date(dateValue.getFullYear(), Number(e.target.value)));
    }
  };
  const getMonthData = () => {
    let result: Date[][] | undefined[][] = [];
    let day = 1;
    const daysInMonth = getDaysInMonth();
    const monthStartsOn = getDayOfWeek(
      new Date(dateValue.getFullYear(), dateValue.getMonth(), 1)
    );
    for (let i = 0; i < (daysInMonth + monthStartsOn) / 7; i++) {
      result[i] = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
          result[i][j] = undefined;
        } else {
          result[i][j] = new Date(
            dateValue.getFullYear(),
            dateValue.getMonth(),
            day++
          );
        }
      }
    }
    setCurrentMonth(result);
  };
  const getDaysInMonth = () => {
    const month = dateValue.getMonth();
    const year = dateValue.getFullYear();
    if (isLeepYaer(year) && month === 1) {
      return arrDaysInMonth[month] + 1;
    } else {
      return arrDaysInMonth[month];
    }
  };
  const getDayOfWeek = (date: Date) => {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return 6;
    return dayOfWeek - 1;
  };
  const isLeepYaer = (year: number) => {
    return !(year % 4 || !(year & 100 && year % 400));
  };
  const handleDayClick = (e: MouseEvent<HTMLElement>) => {
    const day = e.currentTarget.getAttribute("data-day");
    dispatch(
      modalOpen({
        modalContent: "как много у меня сегодня дел",
        modalDate: day,
      })
    );
  };
  useEffect(() => {
    getMonthData();
    let options:string[] = [];
    for(let i = 0; i < 10; i++){
      options.unshift((dateValue.getFullYear() - i).toString());
    }
    for(let i = 1; i < 11; i++){
      options.push((dateValue.getFullYear() + i).toString());
    }
    setYearsValue(options);
  }, [dateValue]);
  return (
    <div className={style.calendar}>
      <div className={style.block}>
        <button
          className={style.button}
          onClick={() => handlePrevButtonClick()}
        >
          {"<"}
        </button>
        <select
          value={dateValue.getMonth()}
          onChange={(e) => handleSelectChange(e)}
        >
          {arrMonth.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => handleSelectChange(e)}
          value={dateValue.getFullYear()}
        >
        {
          yearsValue && yearsValue.map((year, index) =>{
            return <option key={index} value={year}>{year}</option>
          })
        }
        </select>
        <button
          className={style.button}
          onClick={() => handleNextButtonClick()}
        >
          {">"}
        </button>
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
                      <td
                        data-day={date}
                        onClick={(e) => handleDayClick(e)}
                        className={
                          (new Date(
                            date.getDate(),
                            date.getMonth(),
                            date.getFullYear()
                          ).toDateString() ===
                          new Date(
                            nowDate.getDate(),
                            nowDate.getMonth(),
                            nowDate.getFullYear()
                          ).toDateString()
                            ? `${style.day} ${style.today}`
                            : style.day) 
                        }
                        key={index}
                      >
                        {date.getDate()}
                      </td>
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
