import {Request, Response} from 'express';
import * as CursoModel from '../model/Curso';

export const home = async (req: Request, res: Response) => {

    const cursos = CursoModel.getCursos();

    res.render('pages/app', {
        cursos
    });

};