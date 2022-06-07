const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse')

let planets = require('./planets.mongo')

const isHabitablePlanets = (data) => {
  return (
    data.koi_disposition === 'CONFIRMED' &&
    data.koi_insol > 0.36 &&
    data.koi_insol < 1.11 &&
    data.koi_prad < 1.6
  )
}

const loadPlanetsData = () => {
  return new Promise((resolve, reject) => {
    // Read the file row by row
    fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler-data.csv'))
      // Connects readable file and reads it as csv format
      .pipe(
        parse({
          comment: '#',
          columns: true,
        })
      )
      .on('data', async (data) => {
        if (isHabitablePlanets(data)) {
          // Create in mongo
          // Insert + Update = Upsert
          await planets.create({
            keplerName: data.kepler_name,
          })
        }
        // console.log('Data here', data);
      })
      .on('error', (error) => {
        reject(error)
        console.log('ERROR HERE', error)
      })
      .on('end', (results) => {
        resolve()
        console.log(`Total habitable planets is ${planets.length}`)
      })
  })
}

async function listPlanets() {
  return await planets.find({})
}

module.exports = {
  loadPlanetsData,
  listPlanets,
}
