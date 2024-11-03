import Widget from '../../components/widget'
import style from '../page.module.css'
const Home = () =>{
    return (
        <div className={style.container}>
        <Widget type="work" />
        <Widget type="eat" />
      </div>
    )
}
export default Home