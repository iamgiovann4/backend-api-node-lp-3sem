const mysql = require('mysql')
const courseModel = require('../models/courseModel')
const courseController = {} //Criando um objt.

courseController.listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

courseController.createCourse = (req, res) => {
  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Cadastrado!" })
  })
}

courseController.deleteCourse = (req, res) => {
  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.deleteCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Deletado com sucesso!" })
  })
}
module.exports = courseController


// Este código define um objeto courseController, que contém duas funções: listAllCourses e createCourse. O courseController usa o módulo courseModel que é um modelo de banco de dados para a tabela cursos.

// A função listAllCourses usa a função listAllCourses do courseModel para obter todos os cursos do banco de dados.Se houver um erro no banco de dados, a função envia uma resposta de erro com um status de código 500 e uma mensagem de erro JSON. Se a consulta for bem sucedida, a função envia uma resposta JSON contendo o resultado da consulta.

// A função createCourse chama a função createCourse do courseModel e passa os parâmetros req e res para essa função.Isso permite que a função createCourse do courseModel tenha acesso aos parâmetros da solicitação HTTP e a capacidade de enviar uma resposta HTTP de volta para o cliente.

//O comando module.exports = courseController exporta o objeto courseController para que possa ser usado em outros arquivos como um módulo. Isso permite que outros arquivos acessem as funções do courseController para manipular cursos no banco de dados.