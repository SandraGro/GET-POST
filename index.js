const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
 response.send('hello world');
});

app.get('/usuario', (request, response)=>{
    const usuario ={
        name: 'Alfredo',
        edad: 28
    }
    response.send(usuario);
});

app.get('/usuarios', (request, response) =>{ //parametros de la URl
    const name = request.query.name;
    const age = request.query.age;
    const ageName = age + ' '+ name;
    response.send(ageName);
});

app.delete('/borrar', (request, response)=>{
    const id = request.query.id;
    //aqui se borra el recurso
    response.send('se borró ' + id);
});

app.listen(port, () => console.log('server running'))
