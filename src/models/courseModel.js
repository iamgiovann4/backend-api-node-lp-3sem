const con = require('../db/dbConnection')

const courseModel = {} //Este código define um objeto que contém duas funções: listAllCourses e createCourse.

courseModel.listAllCourses = (callback) => {
  const sql = "SELECT * FROM cursos;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

courseModel.createCourse = (course, callback) => {
  const { curso, cargahoraria } = course
  const sql = 'INSERT INTO cursos (nome, cargahoraria) VALUES (?, ?);'
  const values = [curso, cargahoraria]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

courseModel.deleteCourse = (course, callback) => {
  const { id } = course
  const sql = 'DELETE FROM cursos WHERE id = ?;'
  const values = [id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

module.exports = courseModel

// O comando module.exports = courseModel exporta o objeto courseModel para que possa ser usado em outros arquivos como um módulo.

// Esse código define um objeto chamado courseModel, que contém duas funções: listAllCourses e createCourse.
// Em resumo, este código define duas funções que podem ser usadas para listar todos os cursos e criar um novo curso no banco de dados MySQL local.

// A função listAllCourses se conecta a um banco de dados MySQL local e executa uma consulta para selecionar todos os cursos na tabela cursos. Se houver um erro, a função chama a função de retorno chamada(callback) passando o erro como primeiro argumento e nulo como segundo argumento. Se não houver erro, a função chama a função de retorno chamada(callback) passando nulo como primeiro argumento e o resultado da consulta como segundo argumento.