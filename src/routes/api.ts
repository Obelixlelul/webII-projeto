import {Router} from 'express';

import * as HomeController from '../controllers/homeController';
import * as EstudanteController from '../controllers/EstudanteController'

const router = Router();

router.get('/', HomeController.home)

router.post('/estudante/adicionar', EstudanteController.adicionar)
router.get('/estudante/getListaEstudantes', EstudanteController.listar)

export default router;