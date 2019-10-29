const express = import('express');

const app = express();

// route to list all projects
app.get('/project', (req,res)=>{
  res.json({
    message: "Hello World"
  })
});

//route to insert a project
app.post('/project', (req,res)=>{
  res.json({
    message: "Hello World"
  })
});

// route to update a project
app.put('/project/:id', (req,res)=>{
  res.json({
    message: "Hello World"
  })
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