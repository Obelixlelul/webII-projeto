import {Request, Response} from 'express';

export const home = async (req: Request, res: Response) => {

    const cursos = [
        {title: 'BTI'},
        {title: 'EngSoft'},
        {title: 'EngComp'}
    ];

    res.render('pages/app', {
        cursos
    });

};