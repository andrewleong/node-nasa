const planetsModel = require('../models/planets.model')

const listPlanets = async (req, res) => {
  return res.status(200).json(await planetsModel.listPlanets())
}

module.exports = {
  listPlanets,
}
