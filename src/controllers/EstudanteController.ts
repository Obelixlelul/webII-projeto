import {Request, Response} from 'express';
import * as EstudanteModel from '../model/Estudante';
import { v4 as uuidv4 } from 'uuid';
import { getCursos } from '../model/Curso';

export const adicionar = (req: Request, res: Response) => {
    
    let estudante = {
        id : uuidv4(),
        name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
        lastName: req.body.lastName,
        curso: req.body.curso,
        linguagem : req.body.fav_language,
        sistemas : req.body.sistemas
    }

    EstudanteModel.CriarEstudante(estudante);

    let listaDeEstudantes = EstudanteModel.listarEstudantes();

    res.redirect('/estudante/getListaEstudantes');

}

export const listar = (req: Request, res: Response) => {
    let listaDeEstudantes;

   
    listaDeEstudantes = EstudanteModel.listarEstudantes();
    

    res.render('pages/listaEstudantes', {
        listaDeEstudantes
    })
}

export const listarPorCurso = (req: Request, res: Response) => {

    let cursos = getCursos();
    let listaDeEstudantes: any[];

    listaDeEstudantes = EstudanteModel.listarEstudantes();
   
    const obj: any = [];

    cursos.forEach(curso => {       
        let tempStudent = listaDeEstudantes.filter(estudante => estudante.curso == curso.title);
        obj.push({
            "title" : curso.title.toString(),
            "estudantes" : tempStudent,
            "size" : tempStudent.length
        }); 
    });     

    console.log(listaDeEstudantes);
    console.log(obj);

    res.render('pages/estudantesPorCurso', {
        obj
    })

}

export const listarPorLinguagem = (req: Request, res: Response) => {
    let listaDeEstudantes;

   
    listaDeEstudantes = EstudanteModel.listarEstudantes();
    

    res.render('pages/estudantesPorCurso', {
        listaDeEstudantes
    })
}


export const deletar = (req: Request, res: Response) => {
    EstudanteModel.deletarEstudante(req.params.id);
    res.redirect('/estudante/getListaEstudantes');
}

export const detalhar = (req: Request, res: Response) => {
    let estudante = EstudanteModel.getById(req.params.id);
    
    res.render('pages/hello', {
        id: estudante.id,
        name: estudante.name,
        lastName: estudante.lastName,
        curso: estudante.curso,
        linguagem: estudante.linguagem,
        sistemas: estudante.sistemas
    });
}

