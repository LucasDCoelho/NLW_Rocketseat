import Fastify from "fastify";
import { PrismaClient } from '@prisma/client'


const app = Fastify()
const prisma = new PrismaClient()

/* 
    _> Metodos HTTP: 
    Get(Buscar alguma informação), 
    Post(Criar alguma coisa), 
    Put(Atualizar um recurso por completo), Patch(Atualizar um recurso especifico), Delete(Deletar um recurso dentro do Back-end);

*/

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()


    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running!")
})