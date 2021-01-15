//Importando express e nunjucks
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

//Dando o servidor a função de um express
const server = express()

//Parte estática do site
server.use(express.static("public"))
server.use(routes)

//Setando o view engine do servidor
server.set("view engine", "njk")

//Configurando nunjucks
nunjucks.configure("views", {
    express:server
})


//Rodando o servidor
server.listen(5000, function(){
    console.log('server is running')
})