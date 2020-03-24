const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
appp.use(cors());
app.use(express.json());

app.use(routes);

//Rota e recurso
// GET: Pega informação do backend
// POST: Criar uma informação no backend
//PUT : Alterar informação no backend
// DELETE: Deletar uma informação no backend

/*
Tipos de parâmetros:

Query: Parametros nomeados enviados na rota após o simbolo de '?' e geralmente servem para filtros,paginação, entre outros.
Route Params: Parametros utilizados para identificar recursos(rotas)
Request Body: Corpo da requisiçã usado para criar ou alterar recursos
*/

/*
SQL : MySQL, PostgreSQL, Oracle , SQLite
NoSQL: MongoDB, CouchDB, etc
*/

/*
Driver : SELECT * from users
Query Builder: table('users').select('*').where('')
*/



app.listen(3333);

