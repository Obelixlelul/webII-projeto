import {Router} from 'express';

import * as HomeController from '../controllers/homeController';
import * as EstudanteController from '../controllers/EstudanteController'
import * as CursoController from '../controllers/cursoController'

const router = Router();

router.get('/', HomeController.home)

router.post('/estudante/adicionar', EstudanteController.adicionar)

router.get('/estudante/getListaEstudantes/', EstudanteController.listar)
router.get('/estudante/getListaEstudantes/:filter', EstudanteController.listar)
router.get('/estudante/detetar/:id', EstudanteController.deletar)
router.get('/estudante/detalhe/:id', EstudanteController.detalhar)

router.get('/estudantesporcurso', EstudanteController.listarPorCurso)
router.get('/estudantesporlinguagem', EstudanteController.listarPorLinguagem)

router.post('/curso/adicionar', CursoController.adicionarCurso)


export default router;