import express from 'express'
import courseRoutes from './routes/courseRoutes.js'
import userRoutes from './routes/userRoutes.js'
import idRoutes from './routes/idRoutes.js'
import { SERVER } from './config.js'

const app = express()
const port = SERVER.PORT
const host = "localhost"

app.use(express.json())

//TODO: Tratar erro de json inválido

app.use('/course', courseRoutes)
app.use('/user', userRoutes)
app.use('/id', idRoutes)


app.all('*', (req, res) => {
  res.send('404 Rota não encontrada!')
})

// Inicia o servidor
app.listen(port, () => {
  console.log(`Example app listening on port http://www.${host}:${port}`)
})