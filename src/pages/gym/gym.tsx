import { useEffect } from 'react';
import style from '../page.module.css';
import { generateToken } from '../../utils/api';

const Gym = () => {
  useEffect(() => {
    generateToken();
  }, []);
  const sendMuscule = () =>{

  }
  return (
    <div className={style.container}>
        <button onClick={()=>sendMuscule}>text</button>
    </div>
  );
}

export default Gym;