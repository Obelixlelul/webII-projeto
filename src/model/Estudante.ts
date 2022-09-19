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

export const listarEstudantes = () => {
    return estudantes;
}