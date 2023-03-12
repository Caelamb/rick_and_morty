import SearchBar from '../searchbar/SearchBar';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export default function Nav({ onSearch }) {
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
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}
