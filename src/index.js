const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  const { title, ower } = request.query;

  console.log(title);
  console.log(ower);
  
  return response.json({ message : 'Hello Word!'});
});

app.post('/', (request, response) => {
  return response.json(['projeto1']);
});

app.put('/:id', (request, response) => {
  const { id } = request.params;

  return response.json([id]);
});

app.listen(3333, () => {
  console.log('Back-end started!');
});
