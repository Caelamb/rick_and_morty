import styles from './Card.module.css'
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className={styles["card-container"]}>
      <button className={styles["close-btn"]} onClick={props.onClose}>X</button>
      <Link to={`/Detail/${props.id}`}> 
      <h2 className="cardTitle">{props.name}</h2>
     </Link>
     <div className={styles["card-info"]}>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
     </div>
      <img src={props.image} alt="" className={styles["card-img"]}/>
    </div>
  );
}

export default Card;