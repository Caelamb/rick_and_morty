const favs = require("../utils/favs");

const postFav = (req, res) => {
    favs.push(req.body);
    res.status(201).json(favs);
}

const getFavs = (req, res) => {
    res.status(200).json(favs);
}

const delelteFav = (req, res) => {
    const { id } = req.params;
    favs = favs.filter(character => character.id !==
        Number(id));
        res.status(200).json(favs);
}

module.exports = { postFav, getFavs, delelteFav };