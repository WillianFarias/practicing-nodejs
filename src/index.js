const express = require('express');

const app = express();

//use algum tipo de func que todas as rotas teram que passar
app.use(express.json());

app.get('/projects', (request, response) => {
  return response.json( {message: 'Hello World'} );
});



app.listen(3333, () => {
  console.log('Back-end started!')
});