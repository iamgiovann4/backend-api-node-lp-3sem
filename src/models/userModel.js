import con from '../db/dbConnection.js'
import { z } from 'zod'

//TODO Testar regex com zod e ChatGPT

const userSchema = z.object({
  id: 
    z.number({message: "ID deve ser um valor numérico."}).optional(),
  nome: 
    z.string({
      required_error: "Nome é obrigatório.",
      invalid_type_error: "Nome deve ser uma string."
    })
      .min(3, { message: "Nome deve ter no mínimo 3 caracteres." })
      .max(50, { message: "Nome deve ter no máximo 100 caracteres." }),
  age:
    z.string({ 
      required_error: "Idade é obrigatório.",
      invalid_type_error: "Idade deve ser um número"
    })
      .min(1, { message: "Idade deve ter no mínimo 1 caracteres" })
      .max(2, { message: "Idade deve ter no máximo 2 caracteres." }),
  office: 
    z.string({
      required_error: "Profissão é obrigatório.",
      invalid_type_error: "Profissão deve ser uma string."
    })
      .min(6, { message: "Profissão deve ter no mínimo 6 caracteres"})
      .max(256, { message: "Profissão deve ter no máximo 256 caracteres."})
})

export const validateUser = (user) => {
  return userSchema.safeParse(user)
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