import styles from '../styles/Home.module.css';
import Tweet from './Tweet';
import Users from './Users'
import Trend from './Trend';



function Home() {
  return (
    <div className={styles.container}>
      <Users />


      <Tweet />



      <Trend />





    </div>


  );
}

export default Home;
