const express = require('express')// O módulo express é importado. // O require é uma função do Node.js utilizada para importar módulos(bibliotecas) de JavaScript para criar APIs ou aplicações web. A biblioteca mais conhecida do Node.js para criação de servidores web é o Express, e por isso é possível que você tenha visto o comando require('express') em algum lugar.
const courseRoutes = require('./routes/courseRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express() //O código const app = express() cria uma "instância do framework web Express" em uma variável chamada app. Express é uma biblioteca de middleware para Node.js que permite criar servidores web de forma fácil e rápida.
const port = 3100 //Criação de uma porta Web.

app.use('/course', courseRoutes) //O método app.use é um método da instância do framework web Express que permite adicionar middlewares à cadeia de processamento de uma aplicação. Middlewares são funções que têm acesso ao objeto de requisição (req) e objeto de resposta (res). 
app.use('/user', userRoutes) //mesma coisa aqui.

// Middleware para tratar todas as rotas, até que quando der erro e não funcionar nenhuma rota, aparecerá uma msg de erro.
app.all('*', (req, res) => { 
  res.send('404 Rota não encontrada!')
})//é um método da instância do framework web Express que define uma rota para tratar todas as requisições HTTP feitas para qualquer URL da aplicação. O caractere * utilizado como parâmetro indica que a rota deve ser aplicada a qualquer URL da aplicação. Esse método é comumente utilizado para definir tratamentos genéricos para erros ou para realizar ações que devem ser executadas para todas as rotas da aplicação.

// Inicia o servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

