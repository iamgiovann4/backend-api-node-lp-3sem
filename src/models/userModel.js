import con from '../db/dbConnection.js'

export const listAllUser = (callback) => {
  const sql = "SELECT * FROM usuario;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const createUser = (user, callback) => {
  const { nome, age, office } = user
  // const sql = 'INSERT INTO cursos SET ?;'
  // const values = { nome, cargahoraria }
  const sql = 'INSERT INTO usuario (nome, age, office) VALUES (?, ?, ?);'
  const values = [nome, age, office]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

export const deleteUser = (user, callback) => {
  const { id } = user
  const sql = 'DELETE FROM usuario WHERE id = ?;'
  const values = [id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

export const updateUser = (user, callback) => {
  const { id, nome, age, office } = user
  const sql = 'UPDATE usuario SET nome = ?, age = ?, office = ?  WHERE id = ?;'
  const values = [nome, age, office, id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

export default { listAllUser, createUser, deleteUser, updateUser }