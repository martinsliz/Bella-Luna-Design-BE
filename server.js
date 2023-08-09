const express = require('express')
const cors = require('cors')

const app = express()

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3003

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Bella Luna Designs!!!' }))

app.get('/ping', async (req, res) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-api-key': 'n0u0ygip0pqtytzx8mmizw78'
    }
  }

  const response = await fetch(
    'https://api.etsy.com/v3/application/openapi-ping',
    requestOptions
  )

  if (response.ok) {
    const data = await response.json()
    res.send(data)
  } else {
    res.send('oops')
  }
})

app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
