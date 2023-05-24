import con from '../db/dbConnection.js'
import { z } from 'zod'
import sha256 from '../helper/sha256.js'

//TODO Testar regex com zod e ChatGPT

const userSchema = z.object({
  id: 
    z.number({
      required_error: "ID é obrigatório.",
      invalid_type_error: "ID deve ser um número."
    }),
  nome: 
    z.string({
      required_error: "Nome é obrigatório.",
      invalid_type_error: "Nome deve ser uma string."
    })
      .min(3, { message: "Nome deve ter no mínimo 3 caracteres." })
      .max(100, { message: "Nome deve ter no máximo 100 caracteres." }),
  office:
    z.string({ 
      required_error: "Profissão é obrigatório.",
      invalid_type_error: "Profissão deve ser um número"
    })
      .min(4, { message: "Profissão deve ter no mínimo 4 caracteres" })
      .max(50, { message: "Idade deve ter no máximo 50 caracteres." }),
  age: 
    z.string({
      required_error: "Idade é obrigatório.",
      invalid_type_error: "Idade deve ser uma string."
    })
      .min(2, { message: "Idade deve ter no mínimo 2 caracteres"})
      .max(256, { message: "Idade deve ter no máximo 256 caracteres."})
})

export const validateUserToCreate = (user) => {
  const partialUserSchema = userSchema.partial({ id: true });
  return partialUserSchema.safeParse(user)
}

export const validateUserToUpdate = (user) => {
  const partialUserSchema = userSchema.partial({ age: true });
  return partialUserSchema.safeParse(user)
}

export const listAllUsers = (callback) => {
  const sql = "SELECT id, nome, office, roles FROM usuarios;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const listId = (id, callback) => {
  const sql = "SELECT id, nome, office, roles FROM usuarios WHERE id = ?;"
  const values = [id]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null) //a funcao callback é obg a passar 2 parametros
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const createUser = (user, callback) => {
  const { nome, office, age } = user
  // const sql = 'INSERT INTO cursos SET ?;'
  // const values = { nome, cargahoraria }
  const sql = 'INSERT INTO usuarios (nome, office, age) VALUES (?, ?, ?);'
  const values = [nome, office, sha256(age)]

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
  const { id, nome, office } = user
  const sql = 'UPDATE usuarios SET nome = ?, office = ?  WHERE id = ?;'
  const values = [nome, office, id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const loginUser = (office, age, callback) => {
  const sql = 'SELECT * FROM usuarios WHERE office = ? AND age = ?;'
  const value = [office, sha256(age)]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export default { listAllUsers, listId, createUser, deleteUser, updateUser, validateUserToCreate, validateUserToUpdate, loginUser }