import idModel from '../models/idModel.js'

export const listId = (req, res) => {
  const idCourse = req.body.id
  idModel.listId(idCourse, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}