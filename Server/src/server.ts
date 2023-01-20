import Fastify from "fastify"
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running!")
})

/* 
    _> Metodos HTTP: 
    Get(Buscar alguma informação), 
    Post(Criar alguma coisa), 
    Put(Atualizar um recurso por completo), Patch(Atualizar um recurso especifico), Delete(Deletar um recurso dentro do Back-end);

*/