import {Request, Response} from 'express';
import * as CursoModel from '../model/Curso';

export const adicionarCurso = (req: Request, res: Response) => {
    CursoModel.addCurso(req.body.nomeDocurso);
    res.redirect('/');
}