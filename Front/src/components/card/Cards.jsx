import Card from './Card';
import styles from './Cards.module.css';


 function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={`${styles.cardsContainer} ${styles.flexContainer}`}>
         {characters.map((character,index) => {
            return (
               <Card
                  id={character.id}
                  key={character.id}
                  name={character.name} 
                  species={character.species} 
                  gender={character.gender} 
                  image={character.image} 
                  onClose={() => onClose(index)}
               />
            )
         })}
      </div>
   )
};

export default Cards;