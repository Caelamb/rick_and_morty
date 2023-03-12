var http = require(`http`);
const data = require('./data');


const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes(`rickandmorty/character`)){
        const id = req.url.split("/")[2];
        const character = data.find((char) => char.id === Number(id));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(character));
    }
}).listen(PORT, "localhost");