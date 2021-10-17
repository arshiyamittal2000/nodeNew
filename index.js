const express = require("express");
const app = express();
const router = require("./api");
const { getblogDataPost } = require("./api/getblog/controller");
const { loginDataPost } = require("./api/login/controller");
const { postblogDataPost } = require("./api/postblog/controller");
const { RegisterDataPost } = require("./api/register/controller");
const port = 4000;


app.use(express.json())

app.use(router);
router.post("/register",RegisterDataPost); 

router.get("/login",loginDataPost); 


router.get("/blog",getblogDataPost); 


router.post("/blog",postblogDataPost); 

app.get('/',function(req,res){
  res.status(200).send(`Welcome to login , api`);
});


app.listen(port,()=>{
  console.log("server is listening on port",port); 
})





