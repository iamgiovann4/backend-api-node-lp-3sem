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

// const express = require('express')
// const listaCursos = require('./db/cursos.json')
// const mysql = require('mysql')


// const app = express()
// const port = 3100

// app.get('/', (req, res) => {
//   const msg = [{nome: 'LP2'},{nome: 'PJ3'}]
//   res.json(msg)
// })

// app.get('/cursos', (req, res) => {
//   const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "apinode"
//   })

//   con.connect((err) => {
//     if (err) throw err;
//     const sql = "select * from cursos;"
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       //TODO return result with JSON
//     })
//   });

//   res.json(listaCursos)
// })

// app.post('/cursos', (req, res) => {
//   res.json({message: 'POST Cursos JSON!'})
// })

// app.put('/cursos', (req, res) => {
//   res.send('Fiz um update no Curso!')
// })

// app.all('*', (req, res) =>{
//   res.send('404 Rota não encontrada!')
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })