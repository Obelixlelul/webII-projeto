const cursos = [
    {title: 'BTI'},
    {title: 'EngSoft'},
    {title: 'EngComp'}
];

export const getCursos = () => {
    return cursos;
}

export const addCurso = (nomeDoCurso: string) => {
    cursos.push({title: nomeDoCurso});
}