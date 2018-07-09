const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const fileUpload = require('express-fileupload')
const wineryRouter = require('./routes/wineries')
const templateRouter = require('./routes/template')


app.use(bodyParser.json())
app.use(fileUpload())
app.use(express.static(`${__dirname}/../client`)) //rendering the static views
app.use(morgan('tiny')) //watching for changes

app.use('/wineries', wineryRouter) //using the winery router for the home directory of the server
app.use('/template', templateRouter)

mongoose.connect('mongodb://richt3211:hetfield3211@ds119171.mlab.com:19171/winery-guild') //connecting to mlab database
	.then(() => {
		app.listen(3000)
	})
