const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getChatById = (req, res) => {
  const params = req.params;
  const characterId = params.id;

  axios.get(`${URL}${characterId}`)
  .then(response => {
    const { id, name, species, image, gender } = response.data;
    const character = { id, name, species, image, gender };
    res.json(character);
  })
  .catch(error => {
    res.status(500).json({ message: error.message})
  });
};

module.exports = getChatById;
