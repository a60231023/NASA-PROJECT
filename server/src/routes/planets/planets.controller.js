const {planets} = require("../../models/planets.model");

const getAllPlanets =  function getAllPlanets(req, res) {
  res.status(200).json(planets);
}

module.exports = getAllPlanets;
