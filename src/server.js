import express from 'express'
import courseRoutes from './routes/courseRoutes.js'
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middlewares/errorHandler.js'
import logger from './middlewares/logger.js'
import { SERVER } from './config.js'

const app = express()
const port = SERVER.PORT
const host = "localhost" //pra usar no console.log do app.listen

app.use(logger)
app.use(express.json())
//app.use(express.urlencoded({ extended: false })) // get form data urlenconded

app.use('/course', courseRoutes)
app.use('/user', userRoutes)

app.all('*', (req, res) => {
  res.status(404).json({ message:'404 Rota não encontrada...' })
})

app.use(errorHandler)

// Inicia o servidor
app.listen(port, () => {
  console.log(`Example app listening on port http://www.${host}:${port}`)
})