const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const finale = require('finale-rest')


let app = express()
app.use(cors())
app.use(bodyParser.json())

// For ease of this tutorial, we are going to use SQLite to limit dependencies
let database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite'
})

// Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
var User = database.define('User', {
  username: Sequelize.STRING,
  requested_resturant: Sequelize.DATE
});

// Initialize finale
finale.initialize({
  app: app,
  sequelize: database
})

// Create the dynamic REST resource for our Post model
var userResource = finale.resource({
  model: User,
  endpoints: ['/users', '/users/:id']
});

userResource.create	
userResource.list	
userResource.read	
userResource.update	

// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
  })

  