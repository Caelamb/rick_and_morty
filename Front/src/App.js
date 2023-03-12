import './App.css'
import Cards from './components/card/Cards'
import Nav from './components/searchbar/Nav'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail'; 

function App () {
  const [characters, setCharacters] = React.useState([]);

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const characterExists = characters.some((char) => char.id === data.id);
          if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('Este personaje ya está en la lista.');
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };
  

 const addRandomCharacter = () => {
  const randomId = Math.floor(Math.random() * 826) + 1;
  fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
    .then((response) => response.json())
    .then((data) => {
      const characterExists = characters.some((char) => char.id === data.id);
      if (!characterExists) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        addRandomCharacter();
      }
    });
};

const onClose = (index) => {
  setCharacters((oldChars) => oldChars.filter((char, i) => i !== index));
};
  return (
    <div className='App' style={{ padding: '25px' }}>
       <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
       <hr />
       <Routes>
       <Route path='/About' element={<About />} />
       <Route path='/Detail/:detailId' element={<Detail />} />
       <Route path='/home' element= {<Cards characters={characters} onClose={onClose} />}/>
      </Routes>
      </div>
  )
}

export default App
