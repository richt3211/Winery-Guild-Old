const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const wineryRouter = require('./routes/wineries')
const filterRouter = require('./routes/filter')


app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client/components/mainComponent`)) //rendering the static views
app.use(morgan('tiny')) //watching for changes

app.use('/wineries', wineryRouter) //using the winery router for the home directory of the server
app.use('/filter', filterRouter)
app.use(express.static(`${__dirname}/uploads`))


// mongoose.connect('mongodb://richt3211:hetfield3211@ds119171.mlab.com:19171/winery-guild') //connecting to mlab database
	mongoose.connect('mongodb://richt3211:hetfield3211@ds119171.mlab.com:19171/winery-guild')
		.then(() => {
			app.listen(3000)
		})
