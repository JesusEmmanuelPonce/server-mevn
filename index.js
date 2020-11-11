const express = require('express')
const app = express()
const { connection } = require('./database')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes')
require('dotenv').config()

app.use(morgan('dev'))
app.use(cors())

connection()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', router)

app.listen(process.env.PORT, () => console.log(`Server ${process.env.PORT}`))