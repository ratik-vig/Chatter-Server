const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const UserController = require('./controllers/UserController')
const db = require('./utils/db')

dotenv.config()

const app = express()

app.use(cors())

app.use('/api/v1/users', UserController)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`)) 