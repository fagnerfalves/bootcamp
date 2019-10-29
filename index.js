const express = import('express');

const app = express();

app.get('/teste', (req,res)=>{
  res.json({
    message: "Hello World"
  })
});

app.listen(3333);