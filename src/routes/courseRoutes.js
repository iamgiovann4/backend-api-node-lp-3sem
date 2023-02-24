//criando rotas
const express = require('express')// O módulo express é importado para criar o objeto router.
const router = express.Router()// Este código define um objeto router que é um objeto de roteamento do Express.O roteador permite definir rotas para uma aplicação Express e associar funções de controlador a essas rotas.
const courseController = require('../controllers/courseCoutroller')// O módulo courseController é importado para que possa ser usado para associar as funções de controlador às rotas.

const { listAllCourses, createCourse, deleteCourse } = courseController

router.get('/', listAllCourses);
router.post('/', createCourse);
router.delete('/', deleteCourse);

module.exports = router;

// O comando module.exports = router exporta o objeto router para que possa ser usado em outros arquivos como um módulo. Isso permite que outros arquivos acessem as rotas definidas neste roteador e usem as funções de controlador associadas a essas rotas.

// O roteador é um recurso que permite a separação de diferentes rotas de uma aplicação em diferentes arquivos ou módulos, facilitando a organização do código e a manutenção da aplicação.Com o roteador, é possível agrupar rotas relacionadas em um único arquivo, definir middleware específico para essas rotas e, em seguida, montar o roteador em um caminho específico da aplicação. Ao criar um objeto de roteador com "const router = express.Router()", é possível utilizar os métodos HTTP (como GET, POST, PUT, DELETE) para definir rotas e middleware específicos para essas rotas, de forma similar ao que é feito com o objeto app do Express.