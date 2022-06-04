const express = require('express')

const {
  listLaunches,
  createLaunch,
  abortLaunchById,
} = require('../../controllers/launches.controller')

const launchesRouter = express.Router()

launchesRouter.get('/', listLaunches)
launchesRouter.post('/', createLaunch)
launchesRouter.delete('/:id', abortLaunchById)

module.exports = launchesRouter
