const express = require('express');
const services = require ('./services');


exports.routes = (app) =>{

app.get('/json', (request, response)=>{
    const name = request.query.nombre; //query.nombre tiene que coinciir con lo que se mande en la URL
    const lastName = request.query.apellido;
    const age = request.query.edad;
    const json = {Nombre: name , Apellido: lastName, Edad:age } //el objeto debe tener propiedad: valor
    response.json(json);
});

app.get('/usuario', (request, response)=>{
    const user = request.query.user; //query.nombre tiene que coinciir con lo que se mande en la URL
    const email = user+"@gmail.com" 
    response.send(email);
});


app.get('/edad', (request, response)=>{
    const nacimiento = request.query.nac; //query.nombre tiene que coinciir con lo que se mande en la URL
    const edad = 2019-nacimiento;
    console.log(edad);
    response.send("Tu edad es: "+ edad);
});


app.post('/datos',(request, response) => {
    const postData = request.body;
    services.addId (postData); // del archivo de services manda a llamar la funciuon de addId
    response.json(postData);
  });

  
  app.get('/html', (request, response)=>{
      response.render('form');
  });

  app.post('/form', (request, response)=>{
    const data = request.body;
    response.send(data);
});
}
