import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((err) => {
        window.alert('No hay personajes con ese ID');
      });
    return setCharacter({});
  }, [detailId]);

  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    history.push('/home');
  };

  return (
    <div className={styles.detail}>
      <Link to="/home">
      <button onClick={handleClick}>Volver</button>
      </Link>
      <img src={character.image} alt={character.name} className={styles.image} />
      <div className={styles.info}>
        <h1 className={styles.name}>{character.name}</h1>
        <div className={styles.attributes}>
          <p className={styles.attribute}>
            <span className={styles.label}>Status: </span>
            {character.status}
          </p>
          <p className={styles.attribute}>
            <span className={styles.label}>Specie: </span>
            {character.species}
          </p>
          <p className={styles.attribute}>
            <span className={styles.label}>Gender: </span>
            {character.gender}
          </p>
          <p className={styles.attribute}>
            <span className={styles.label}>Origin: </span>
            {character.origin?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
