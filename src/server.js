const express = require('express')
const listaCursos = require('./bd/cursos.json')
// const res = require('express/lib/response')
const app = express()
const port = 3200

app.get('/', (req, res) => {
  const msg = [{nome: 'LP2'}, {nome: 'PJ3'}]
  res.json(msg)
})

app.get('/curso', (req, res) => {
  res.json(listaCursos)
})

app.post('/curso', (req, res) => {
  res.json({message: "Olá POST curso JSON!"})
})

app.put('/curso', (req, res) => {
  res.send('Fiz um update no curso!')
})

app.all('*', (req, res) => {
  res.send('Erro')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

