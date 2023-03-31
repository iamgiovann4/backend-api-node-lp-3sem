import con from '../db/dbConnection.js'
import { z } from 'zod'

const userSchema = z.object({
  id: z.number().optional(),
  nome: z.string().min(3).max(50),
  email:
    z.string({ message: "Email Inválido" })
      .email({ message: "Email Inválido" })
      .min(5, { message: "O email deve ter ao menos 5 Caracteres" })
      .max(50),
  senha: z.string().min(3).max(50),
  avatar: z.string()
})

export const validateUser = (user) => {
  return userSchema.parse(user)
}

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

export const listId = (idUser, callback) => {
  const sql = "SELECT * FROM usuarios WHERE id = ?;"
  const values = [idUser]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null) //a funcao callback é obg a passar 2 parametros
      console.log(`DB Error: ${err.sqlMessage}`)
    } else if (result.length === 0) {
      result.message = "Id não encontrado"
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

export const deleteUser = (id, callback) => {
  // const id  = user
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

export default { listAllUsers, listId, createUser, deleteUser, updateUser, validateUser }