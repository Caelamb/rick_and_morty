const http = require('http');
const  getCharById  = require('./controllers/getCharById');
const  getCharDetail = require('./controllers/getCharDetail');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("onsearch")){
        const id = req.url.split("/").pop();
        getCharById(res, id);
    }

    else if(req.url.includes("detail")){
        const id = req.url.split("/").pop();
        getCharDetail(res, id);
    }
   
})

server.on('error', (err) => {
    console.error(`Error en el servidor: ${err.message}`);
  });

server.listen(3001, "localhost");