import con from '../db/dbConnection.js'

export const listId = (idCourse, callback) => {
  const values = idCourse
  const sql = "SELECT * FROM cursos WHERE id = '?';"
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null) //a funcao callback é obg a passar 2 parametros
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export default { listId }