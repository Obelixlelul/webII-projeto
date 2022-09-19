import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import api from './routes/api';

dotenv.config();

const app = express();

//definindo view engine
app.set('view engine', 'mustache');
app.set('views', path.join(  __dirname, 'views'));
app.engine('mustache', mustache());

//definindo diretório estático
app.use(express.static(path.join(__dirname, '../public')));

//Habilitando o corpo da requisição
app.use(express.urlencoded({extended: true}));

// Rota do sistema
app.use(api);

// Caso a rota não seja encontrada
app.use((req: Request, res: Response) => {
    res.status(404);

    res.json({
        error: 'Pagina nao encontrado'
    })

});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
});