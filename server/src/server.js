const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000

const MONGO_URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@nasacluster.fdwzq2e.mongodb.net/?retryWrites=true&w=majority`

const server = http.createServer(app)

mongoose.connection.once('open', () => console.log('Mongo is connected'))

mongoose.connection.on('error', (error) => console.error(error))

const startServer = async () => {
  await mongoose.connect(MONGO_URL)
  await loadPlanetsData()
  server.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`)
  })
}

startServer()
