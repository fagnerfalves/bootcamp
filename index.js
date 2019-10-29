const express = require('express');

const app = express();

const projects = [];

// route to list all projects
app.get('/project', (req,res)=>{
  return res.json(projects);
});

//route to insert a project
app.post('/project', (req,res)=>{
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
app.put('/project/:id', (req,res)=>{
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

//route to delete a project
app.delete('/project/:id', (req,res)=>{
  res.json({
    message: "Hello World"
  })
});

// route to add a task in any project
app.post('/project/:id/tasks', (req,res)=>{
  res.json({
    message: "Hello World"
  })
});


app.listen(3333);