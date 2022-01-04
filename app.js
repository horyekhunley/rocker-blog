require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ejs = require('ejs')
const paginate = require('express-paginate')
const passport = require('passport')
const mongoose = require('mongoose')

const app = express()
const router = require('./routes/index')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
}).then(() => {
  console.log(`MongoDB connected...`)
}).catch((err) => {
  console.log('Error connecting to MongoDB. Error...', err)
  process.exit
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(passport.initialize())
require('./middleware/passportMiddleware')(passport)
app.use(paginate.middleware(process.env.LIMIT, process.env.MAX_LIMIT))

app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
