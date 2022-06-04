const launchesModel = require('../models/launches.model')

const listLaunches = (req, res) => {
  return res.status(200).json(launchesModel.listLaunches())
}

const createLaunch = (req, res) => {
  const launch = req.body
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
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
}
