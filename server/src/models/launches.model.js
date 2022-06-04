const launches = new Map()

let latestFlightNumber = 100

const launch = {
  mission: 'Kepler Exploration X',
  rocket: 'Explorer 1S2',
  launchDate: new Date('December 26, 2030'),
  destination: 'Kepler-442 b',
  flightNumber: 100,
  customers: ['ZTM', 'NASA'],
  upcoming: true,
}

launches.set(launch.flightNumber, launch)

const listLaunches = () => {
  const launchesConvertToValidArr = Array.from(launches.values())
  return launchesConvertToValidArr
}

const createLaunch = (launch) => {
  latestFlightNumber++
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['Zero to Master', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  )
}

module.exports = {
  listLaunches,
  createLaunch,
}
