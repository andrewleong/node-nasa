const express = require('express')
const { listPlanets } = require('../../controllers/planets.controller')

const planetsRouter = express.Router()
planetsRouter.get('/', listPlanets)

module.exports = planetsRouter
