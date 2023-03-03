import express from 'express' // O módulo express é importado.
import courseRoutes from './routes/courseRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
const port = 3100 //Criação de uma porta Web.

app.use(express.json())

//TODO: Tratar erro de json inválido

app.use('/course', courseRoutes)
app.use('/user', userRoutes) //mesma coisa aqui.


app.all('*', (req, res) => {
  res.send('404 Rota não encontrada!')
})

// Inicia o servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})