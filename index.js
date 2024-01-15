require('dotenv').config()
const express = require('express')
const router = require('./routers/index')
const cors = require('cors')
const app = new express(),
	PORT = 5000 || process.env.PORT

app.use(express.json())
app.use(express.static(__dirname + '/photos'))
app.use(
	cors({
		origin: 'http://localhost:5173',
	})
)
app.use('/', router)
const Start = () => {
	app.listen(PORT, () => {
		console.log('Server start on port:', PORT)
	})
}

Start()
