const cursos = [
    {title: 'BTI'},
    {title: 'EngSoft'},
    {title: 'EngComp'}
];

const linguagens = [
    {title: `HTML`},
    {title: `CSS`},
    {title: `JavaScript`},
]

export const getCursos = () => {
    return cursos;
}

export const getLinguagens = () => {
    return linguagens;
}

export const addCurso = (nomeDoCurso: string) => {
    cursos.push({title: nomeDoCurso});
}