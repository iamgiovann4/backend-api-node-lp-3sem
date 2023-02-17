//criando rotas
const express = require('express')
const mysql = require('mysql')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({message: "Entrou na rota /userRoutes GET"})
})

router.post('/', (req, res) => {
  res.json({ message: "Entrou na rota /userRoutes POST" })
})

module.exports = router