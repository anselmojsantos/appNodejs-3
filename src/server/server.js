/*
Servidor Node
import { createServer } from 'node:http';

const server = createServer((req, resp)=>{
    resp.write('Agora foi essa bagaça, vou dormir!');

    return resp.end();
});

server.listen(3333);

*/

//Servidor com Express.js

/*
import express from 'express';

const appServer = express();

appServer.get('/',(req, res)=>{
    res.send('Hello Express.Js');
});

appServer.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})
*/

import fastify from "fastify";
//import { DatabaseMemory } from "../dataBase/dateBase-memories.js";
import { DatabasePostgres } from "../db/databese-postgres.js";

const appServer = fastify();

appServer.get('app-nodejs-3.vercel.app/',async(req, res)=>{
    const search = req.query.search
    const videos = await database.list(search)
    return videos

});
//const database = new DatabaseMemory()
const database = new DatabasePostgres()
appServer.post('app-nodejs-3.vercel.app/video',async (req, res)=>{
    const {title, description, duration} = req.body;
     
   await database.create({
        title,
        description,
        duration
    })
    console.log(database.list())
    return res.status(201).send()

});

appServer.put('app-nodejs-3.vercel.app/video/:id',async (req, res)=>{
    const videoId = req.params.id
    const {title, description, duration} = req.body;
     
   await database.update(videoId,{
        title,
        description,
        duration
    })
    return res.status(204).send()
});

appServer.delete('app-nodejs-3.vercel.app/video/:id',async (req, res)=>{
    const videoId = req.params.id

    await database.delete(videoId)
    return res.status(204).send()     
});

export default appServer