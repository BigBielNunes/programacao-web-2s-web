import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/user'
import clienteController from './controllers/cliente'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('GET!')
})

app.use('/produto', userController)

app.use('/cliente', clienteController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
