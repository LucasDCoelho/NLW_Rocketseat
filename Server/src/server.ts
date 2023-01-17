import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'


const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/* 
    _> Metodos HTTP: 
    Get(Buscar alguma informação), 
    Post(Criar alguma coisa), 
    Put(Atualizar um recurso por completo), Patch(Atualizar um recurso especifico), Delete(Deletar um recurso dentro do Back-end);

*/

app.get('/', async () => {
    const habits = await prisma.habit.findMany()


    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running!")
})