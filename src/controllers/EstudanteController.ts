import {Request, Response} from 'express';
import {CriarEstudante, listarEstudantes} from '../model/Estudante';
import { v4 as uuidv4 } from 'uuid';

export const adicionar = (req: Request, res: Response) => {
    
    let estudante = {
        id : uuidv4(),
        name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
        lastName: req.body.lastName,
        curso: req.body.curso,
        linguagem : req.body.fav_language,
        sistemas : req.body.sistemas
    }

    CriarEstudante(estudante);

    res.render('pages/hello', {
        id: estudante.id,
        name: estudante.name,
        lastName: estudante.lastName,
        curso: estudante.curso,
        linguagem: estudante.linguagem,
        sistemas: estudante.sistemas
    });

}

export const listar = (req: Request, res: Response) => {
    let listaDeEstudantes = listarEstudantes();

    res.render('pages/listaEstudantes', {
        listaDeEstudantes
    })

}