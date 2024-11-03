import { FC, useEffect, useState } from "react";
import style from "./modal.module.css";
import { useAppDispatch, useAppSelector } from "../../service/store/store";
import { modalClose } from "../../service/reducers/modalReducers";

const Modal = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { modalVisible, modalContent, modalDate } = useAppSelector((store) => store.modal);
  const [day, setDay] = useState<Date>(new Date());
  const dispatch = useAppDispatch();
  const closePopup = () => {
    dispatch(modalClose());
  };
  useEffect(() => {
    setIsOpen(modalVisible);
    const closePopupEsc = (event: KeyboardEventInit) =>
      event.key === "Escape" && closePopup();
    setDay(new Date(modalDate));
    document.addEventListener("keydown", closePopupEsc);
    return () => document?.removeEventListener("keydown", closePopupEsc);
  }, [modalVisible, modalDate]);

  return (
    <>
      {isOpen && (
        <div
          className={`${style.overlay} ${style.opened}`}
          onClick={() => closePopup()}
        >
          <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            <h1>{`${day.getDate()} ${day.getMonth()} ${day.getFullYear()}`}</h1>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
