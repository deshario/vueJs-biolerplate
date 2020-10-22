const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('> 🚀 Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('> 🚀 Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('> 🚀 Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('> 🚀 Connection Closed')
})

mongoose.connection.on('error', (error) => {
  console.log('> 🚀 ERROR: ' + error)
})

const createConnection = async () => {
  await mongoose.connect('mongodb://localhost/vue-express', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}

module.exports = createConnection