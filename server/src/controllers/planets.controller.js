const planetsModel = require('../models/planets.model')

const listPlanets = (req, res) => {
  return res.status(200).json(planetsModel.listPlanets())
}

module.exports = {
  listPlanets,
}
