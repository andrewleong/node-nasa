const express = require('express')

const {
  listLaunches,
  createLaunch,
} = require('../../controllers/launches.controller')

const launchesRouter = express.Router()

launchesRouter.get('/', listLaunches)
launchesRouter.post('/', createLaunch)

module.exports = launchesRouter
