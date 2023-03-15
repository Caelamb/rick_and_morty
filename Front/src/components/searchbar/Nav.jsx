import SearchBar from '../searchbar/SearchBar';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav({ onSearch, myFavorites }) {
  return (
    <nav className={styles.navContainer}>
      <h1 className={styles.navTitle}>Rick and Morty App</h1>
      <div className={styles.navSearch}>
        <NavLink to="/About">
          <button>About</button>
        </NavLink>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
        <NavLink to="/Favorites">
          <button>Favorites</button>
        </NavLink>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Nav);
