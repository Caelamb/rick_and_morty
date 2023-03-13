const express = require('express');
const server = express();
const router = require('./routes/index');
const PORT = 3001;
const favs = require("./utils/favs");

server.use(express.json());

// Rutas
router.get('/rickandmorty/fav', (req, res) => {
    res.json(favs);
  });
  
  router.post('/rickandmorty/fav', (req, res) => {
    const { id, name, species, image, gender } = req.body;
    const character = { id, name, species, image, gender };
    favs.push(character);
    res.json({ message: 'Character added to favorites' });
  });
  
  router.delete('/rickandmorty/fav/:id', (req, res) => {
    const { id } = req.params;
    const index = favs.findIndex(character => character.id === id);
    if (index !== -1) {
      favs.splice(index, 1);
      res.json({ message: 'Character removed from favorites' });
    } else {
      res.status(404).json({ message: 'Character not found in favorites' });
    }
  });

server.use("/", router);

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
 });