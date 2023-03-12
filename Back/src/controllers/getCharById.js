const axios = require('axios');

const getCharById = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { id, image, name, gender, species } = response.data;

      const character = {
        id,
        image,
        name,
        gender,
        species,
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      console.log(error);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Character not found');
    });
};

module.exports = getCharById;

  