import React from 'react';

export default function SearchBar(props) {
   const { onSearch } = props;
   const [ character, setCharacter ] = React.useState('');

   const handleClick = (event) => {
      event.preventDefault();
      onSearch(character);
      setCharacter('');
   };

   return (
      <div>
         <form onSubmit={handleClick}>
            <input
               type='search'
               value={character}
               onChange={(event) => setCharacter(event.target.value)}
            />
            <button type='submit'>Agregar</button>
         </form>
      </div>
   );
}
