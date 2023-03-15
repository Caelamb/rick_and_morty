import styles from './Card.module.css'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromFavorites, addToFavorites } from '../../redux/actions';

function Card(props) {
  const [isFav, setIsFav] = React.useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

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
      {
        isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )
      }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addToFavorites(character)),
    deleteFavorite: (id) => dispatch(removeFromFavorites(id))
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);