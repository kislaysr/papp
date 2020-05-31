var express = require('express');
var router = express.Router();
const fs = require('fs-extra')
/* GET home page. */


//http://localhost:3000/webhook

router.post('/webhook', (req, res, next)=>{
  console.log(req.body);
  res.json("ok");
})

router.get('/', (req, res, next)=>{
  console.log(req.body);
  res.json("Server listening at 3000");
})



module.exports = router;
