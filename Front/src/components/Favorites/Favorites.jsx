import React from 'react';
import { connect } from 'react-redux';
import styles from './favorites.module.css';

const Favorites = ({ myFavorites }) => {
  return (
    <div className={styles.favoritesContainer}>
      <h1>Mis Favoritos</h1>
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
