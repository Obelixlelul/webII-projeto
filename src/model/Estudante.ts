import {Request, Response} from 'express';

const estudantes: any[] = [];

export const CriarEstudante = (estudante: any) => {
    estudantes.push({
        id: estudante.id,
        name: estudante.name,
        lastName: estudante.lastName,
        curso: estudante.curso,
        linguagem: estudante.linguagem,
        sistemas: estudante.sistemas
    })
}

export const deletarEstudante = (id: any) => {
    let index = estudantes.findIndex(item => item.id === id );
    estudantes.splice(index, 1);
}

export const listarEstudantes = () => {
    return estudantes;
}

export const listarPorCurso = (curso: string) => {
    return estudantes.filter(estudante => estudante.curso === curso);
}

export const listarPorLinguagem = (linguagem: string[]) => {
    return estudantes.filter(estudante => estudante.linguagem === linguagem);
}

export const getById = (id: any) => {
    let index = estudantes.findIndex(item => item.id === id );
    return estudantes[index];
}