
const express = require('express')

const app = express()

app.use(express.json())
app.use('/api/courses', require('./routes/api/courses'))

app.get('/', (req, res) => res.send('Hello World'))

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on prot ${port}...`))