import style from "./App.module.css";
import Header from "../header";
import { useEffect, useState } from "react";
import Widget from "../widget";
import Modal from "../modal";
import { useAppSelector } from "../../service/store/store";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Home from "../../pages/home/home";
import Gym from "../../pages/gym/gym";
const App = () => {
  const [modalOpen, setModalOpen] = useState<Boolean>(false);
  const onOpen = useAppSelector((store) => store.modal.modalVisible);
  useEffect(()=>{
    setModalOpen(onOpen);
  },[onOpen])
    return (
    <div className={style.app}>
      <Header />
      {
        <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/gym'} element={<Gym/>}/>
        <Route path={'/register'}/>
        <Route path={'/forgot-password'} />
        <Route path={'/reset-password'}/>
        <Route path={'/profile'}>
            <Route path={'/profile'}/>
            <Route path={'/profile/orders'}/>
        </Route>
        <Route path={'*'} element={<Home/>}/>
    </Routes>
      }
      {modalOpen && <Modal />}
    </div>
  );
};
export default App;
