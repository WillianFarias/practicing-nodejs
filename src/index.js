const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.get('/', (request, response) => {

  const { title } = request.query;

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;
  
  return response.json(results);
});

app.post('/', (request, response) => {
  const {  title, ower } = request.body;
  const project = { id: uuid(), title, ower };

  projects.push(project);

  return response.json(project);
});

app.put('/:id', (request, response) => {
  const { id } = request.params;
  const { title, ower } = request.body;

  const indexProject = projects.findIndex(project => project.id === id);

  if (indexProject < 0) {
    return response.status(400).json( {error : 'Project not found'});
  }

  const project = {
    id,
    title,
    ower
  };

  projects[indexProject] = project;

  return response.json(project);
});

app.delete('/:id', (request, response) => {
  const { id } = request.params;
  const indexProject = projects.findIndex(project => project.id === id);

  if (indexProject < 0) {
    return response.status(400).json({ error: 'Project not found' });
  }

  projects.splice(indexProject, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('Back-end started!');
});
