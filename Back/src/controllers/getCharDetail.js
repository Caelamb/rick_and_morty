const axios = require('axios');

const getCharDetail = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { image, name, gender, status, origin, species } = response.data;

      const character = {
        image,
        name,
        gender,
        status,
        origin,
        species
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

module.exports = getCharDetail;