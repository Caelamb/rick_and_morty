import React from 'react';
import { connect } from 'react-redux';
import styles from './favorites.module.css';
import { useDispatch } from 'react-redux';
import { orderCards, filterCards } from '../../redux/actions';

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilterChange = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.favoritesContainer}>
      <h1>Mis Favoritos</h1>
      <div className={styles.filters}>
        <select name="ordenamiento" onChange={handleOrderChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filtrado" onChange={handleFilterChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.favoritesList}>
        {myFavorites.map((favorite) => (
          <div className={styles.favoriteCard} key={favorite.id}>
            <img src={favorite.image} alt={favorite.name} />
            <h3>{favorite.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps)(Favorites);
