import userModel from '../models/userModel'

export const listAllUser = (req, res) => {
  userModel.listAllUser((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createUser = (req, res) => {
  const user = req.body
  userModel.createUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })

    if (result)
      res.json({ message: "Usuario Cadastrado!" })
  })
}

export const deleteUser = (req, res) => {
  const { id } = req.body
  //TODO Verificar se os dados são válidos
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuario Deletado com sucesso!" })
  })
}

export const updateUser = (req, res) => {
  const user = req.body
  //TODO Verificar se os dados são válidos
  userModel.updateUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuario Editado com sucesso!" })
  })
}