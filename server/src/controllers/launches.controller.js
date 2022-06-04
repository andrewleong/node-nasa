const launchesModel = require('../models/launches.model')

const abortLaunchById = (req, res) => {
  const launchId = req.params.id ? Number(req.params.id) : null
  if (!launchId) {
    return res.status(400).json({
      error: 'Missing required query string: id',
    })
  }

  if (!launchesModel.foundLaunchId(launchId)) {
    return res.status(404).json({
      error: 'Launch not found',
    })
  }

  const aborted = launchesModel.abortLaunchById(launchId)

  return res.status(201).json(aborted)
}

const listLaunches = (req, res) => {
  return res.status(200).json(launchesModel.listLaunches())
}

const createLaunch = (req, res) => {
  const launch = req.body
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: 'Missing required launch property',
    })
  }

  launch.launchDate = new Date(launch.launchDate)

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'invalid launch date',
    })
  }

  launchesModel.createLaunch(launch)
  res.status(201).json(launch)
}

module.exports = {
  listLaunches,
  createLaunch,
  abortLaunchById,
}
