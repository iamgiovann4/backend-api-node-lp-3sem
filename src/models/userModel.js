import con from '../db/dbConnection.js'

export const listAllUsers = (callback) => {
  const sql = "SELECT * FROM usuarios;"
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
  const sql = 'INSERT INTO usuarios (nome, age, office) VALUES (?, ?, ?);'
  const values = [nome, age, office]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const deleteUser = (user, callback) => {
  const id  = user
  const sql = 'DELETE FROM usuarios WHERE id = ?;'
  const values = [id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const updateUser = (user, callback) => {
  const { id, nome, age, office } = user
  const sql = 'UPDATE usuarios SET nome = ?, age = ?, office = ?  WHERE id = ?;'
  const values = [nome, age, office, id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export default { listAllUsers, createUser, deleteUser, updateUser }