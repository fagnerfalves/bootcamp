const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

//middleware check if the project exist
function checkProject(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project does not exists' });
  }

  return next();
}

//middleware for logging
function logRequests(req, res, next) {

  console.count("Número de requisições");

  return next();
}

server.use(logRequests);

// route to list all projects
app.get('/projects', (req,res)=>{
  return res.json(projects);
});

//route to insert a project
app.post('/projects', (req,res)=>{
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };
  projects.push(project);

  return res.json(project);
});

// route to update a project title
app.put('/projects/:id', checkProject, (req,res)=>{
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

//route to delete a project
app.delete('/projects/:id', checkProject, (req,res)=>{
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

// route to add a task in any project
app.post('/projects/:id/tasks', checkProject, (req,res)=>{
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});


app.listen(3333);