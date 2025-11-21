import styles from '../styles/Home.module.css';
import Tweet from './Tweet';
import Users from './Users'
import Trend from './Trend';
import { useSelector } from 'react-redux';
import  Login  from '../components/login';



function Home() {

const token = useSelector((state)=> state.user.token)




  return (
    <div className= {styles.container}>
     <Users />
     <Tweet/>
     <Trend />
    
    
    </div>
   


  );
}

export default Home;
