//criando rotas
const express = require('express')
const mysql = require('mysql')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: "Entrou na rota /courseRoutes GET" })
})

router.post('/', (req, res) => {
  res.json({ message: "Entrou na rota /courseRoutes POST" })
})

module.exports = router