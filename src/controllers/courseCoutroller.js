import courseModel from '../models/courseModel.js'

export const listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const listId = (req, res) => {
  const id = req.params.id
  courseModel.listId(id, (error, result) => {
    if (error) 
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createCourse = (req, res) => {
  const course = req.body
  //TODO Verificar se os dados são válidos
  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Cadastrado!" })
  })
}

export const deleteCourse = (req, res) => {
  const { id } = req.body
  //TODO Verificar se os dados são válidos
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      //TODO Verificar se ao menos uma linha foi removida!
      res.json({ message: "Curso Deletado com sucesso!" })
  })
}

export const deleteId = (req, res) => {
  const { id } = req.params
  //TODO Verificar se os dados são válidos
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      //TODO Verificar se ao menos uma linha foi removida!
      res.json({ message: "Curso deletado com sucesso!"})
  })
}

export const updateCourse = (req, res) => {
  const course = req.body
  //TODO Verificar se os dados são válidos
  courseModel.updateCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Editado com sucesso!" })
  })
}